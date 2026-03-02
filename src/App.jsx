import {useState} from "react";
import Header from "./assets/components/Header";
import CoreConcept from "./assets/components/CoreConcept";
import {CORE_CONCEPTS} from "./data.js"
import {EXAMPLES} from "./data-with-examples.js"
import TabButton from "./assets/components/TabButton";
import "./index.css";

function App() {
  const[selectedTopic,setSelectedTopic] = useState('components');
  
  let tabContent = <p>Please click a Button</p>;

  if (selectedTopic) {
    tabContent =(
      <div id ="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    // selectedButton => 'components','jsx','props','state'
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key = {conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
                <TabButton isSelected={selectedTopic === 'components' } onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'        } onSelect={() => handleSelect('jsx')       }>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'      } onSelect={() => handleSelect('props')     }>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'      } onSelect={() => handleSelect('state')     }>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
