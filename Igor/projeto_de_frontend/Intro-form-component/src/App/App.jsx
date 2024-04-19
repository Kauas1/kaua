import PanelMessage from "../PanelMessage/PanelMessage"
import Form from "../Form/Form"
import Welcome from "../WelcomeSection/WelcomeSection"
import Button from "../Button/Button";
import './App.css'
function App() {
  return (
    <div className="App">
      <Welcome cor="white" texto="Learn to code by watching others" subtexto="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but undestanding how developers think its invaluable."/>  
      <main>
        <PanelMessage cor="white" background="hsl(248, 32%, 49%)" texto="Try it free 7 days then $20/mo. thereafter"/>
        <Form dados="First Name"/>
        <Form dados="Last Name"/>
        <Form dados="Email Adress"/>
        <Form dados="Password"/>
        <Button background="hsl(154, 59%, 51%)" cor="white" />
      </main>
    </div>
  );
}

export default App;


