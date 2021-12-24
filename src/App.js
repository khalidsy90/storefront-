import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoreFront from './components/storefront';
import ProductDetails from './components/productDetails';
import ShoppingCart from './components/checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    maxWidth: '960px',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <StoreFront />
            </Route>
            <Route path="/products/:id" children={<ProductDetails />} />
            <Route exact path="/checkout">
              <ShoppingCart />
            </Route>
          </Switch>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            
            <Footer />
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;