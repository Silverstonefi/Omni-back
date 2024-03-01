import React from "react";
import Header from "../../common/Header";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import Test from "../Test";
import Footer from "../../common/Footer";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Receipt from "../../common/Receipt";
import Admin from "../../Admin/Admin";
import TrackProduct from "../Home/TrackProduct";
import Edit from "../../Admin/Edit";
import Create from "../../Admin/Create";
import Helper from "../../../helper";

const Pages = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/public/about" element={<About />} />
        <Route path="/public/services" element={<Services />} />
        <Route path="/public/contact" element={<Contact />} />
        <Route path="test" element={<Test />} />
        <Route path="/public/confirm" element={<Receipt />} />{" "}
        <Route path="/admin/products" element={<Admin />} />
        <Route path="/editProfile" element={<Edit />} />
        <Route path="/public/tracking_product" element={<TrackProduct />} />
        <Route path="/admin/createNewProduct" element={<Create />} />
        <Route path="/helpers" element={<Helper />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
