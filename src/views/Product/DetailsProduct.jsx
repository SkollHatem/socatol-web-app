import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Layout
import { FeatureBar, MainContainer } from '../../Layout';

// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Queries
import { GET_PRODUCT_QUERY } from '../../queries/Product';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Mutations
import { UPDATE_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Forms
import ProductForm from './ProductForm';

const DetailsProduct = props => {
  const { id } = props.match.params;
  const { history } = props;
  const columnsPersons = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'phone',
      title: 'Telefono'
    },
    {
      name: 'state',
      title: 'Estado'
    },
    {
      name: 'municipality',
      title: 'Municipio'
    }
  ];
  return (
    <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;

        if (error) console.error(error);

        console.log(data);
        const { product } = data;
        return (
          <>
            <FeatureBar title={product.name} subtitle="Producto" back />
            <MainContainer>
              <ContentHeader title="Información del producto">
                <ButtonDialogForm
                  title="Editar información"
                  form={ProductForm}
                  mutation={UPDATE_WAREHOUSE_MUTATION}
                  data={product}
                />
              </ContentHeader>
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Nombre:</b> {product.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Precio:</b> {product.price}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Disponible:</b> {product.stock}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <ContentHeader title="Proveedores" />
                      <DataTable
                        columns={columnsPersons}
                        rows={product.suppliders}
                        handleClick={({ id }) =>
                          history.push(`/gastos/proveedores/${id}`)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ContentHeader title="Clientes" />
                      <DataTable
                        columns={columnsPersons}
                        rows={product.clients}
                        handleClick={({ id }) =>
                          history.push(`/gastos/proveedores/${id}`)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MainContainer>
          </>
        );
      }}
    </Query>
  );
};

export default withRouter(DetailsProduct);
