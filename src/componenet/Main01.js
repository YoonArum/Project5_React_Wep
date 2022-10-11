import './Main01.css';
import SectionContent from './SectionContent';

function Main01() {
    return (
        <div>
            <main>
                
                <SectionContent h1 = "HTML" p="HtmlLogo" />
                <SectionContent h1 = "CSS" p="CssLogo"/>
                <SectionContent h1 = "JavaScript" p="JavaScriptLogo"/>
                <SectionContent h1 = "React" p="ReactLogo"/>

            </main>
        </div>
    );
}

export default Main01;