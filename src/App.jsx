import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./style.css";
import Card from "./components/card";

function App() {
  return(
    <div>
    <Header/>
    <Hero/>
    <Card imgSrc="https://images.unsplash.com/photo-1680458842187-15eaab3f4f8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            Name = "Web Diary"
            PhoneNo = "0481-678543"
            Email = "test@gmail.com"  />
    <Card imgSrc="https://images.unsplash.com/photo-1681152553532-7e15439c0cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80"
            Name = "Tintu"
            PhoneNo = "0481-123456"
            Email = "mail@gmail.com"  />
    <Card imgSrc="https://images.unsplash.com/photo-1681192307954-a22f16cb2f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80"
            Name = "debug media"
            PhoneNo = "0481-633333"
            Email = "test3@gmail.com"  />
    <Card imgSrc="https://images.unsplash.com/photo-1680890981209-4a42bc21326c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            Name = "wety"
            PhoneNo = "0481-9898989"
            Email = "lsdfg@gmail.com"  />        
    
    <Footer/>
    </div>
  )

 
}

export default App
