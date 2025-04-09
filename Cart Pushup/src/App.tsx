import React from "react"
import { Container, FormLabel } from "react-bootstrap"
import { Outlet } from "react-router"
import NavigationBar from "./Navbar"

function App() {

  return (
    <React.Fragment>
      <NavigationBar cartItemCount={10}/>
      <Container fluid className="my-5 p-4">
        <FormLabel className="mx-4 my-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {/* <span className="text-primary">ShopEase</span> - Your One-Stop Shopping
          <span className="text-danger"> Destination</span>
          <br /> */}
          Home
        </FormLabel>
        <Outlet/>
      </Container>
    </React.Fragment>
  )
}

export default App
