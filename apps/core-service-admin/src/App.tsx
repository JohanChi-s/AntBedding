import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { TransporterList } from "./transporter/TransporterList";
import { TransporterCreate } from "./transporter/TransporterCreate";
import { TransporterEdit } from "./transporter/TransporterEdit";
import { TransporterShow } from "./transporter/TransporterShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"Core Service"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="Transporter"
          list={TransporterList}
          edit={TransporterEdit}
          create={TransporterCreate}
          show={TransporterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
