import Header from "./assets/components/Header";
import CoreConcept from "./assets/components/CoreConcept";
import {CORE_CONCEPTS} from "./data.js"
import TabButton from "./assets/components/TabButton";

function App() {
  function handleSelect(selectedButton) {
    // selectedButton => 'components','jsx','props','state'
        console.log(`Selected: ${selectedButton}`);
    }
  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
                <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
