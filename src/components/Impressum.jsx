// Impressum.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/Impressum.css';

const Impressum = () => {
  return (
    <div className="Impressum">
      <header>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <h1>Impressum</h1>
      </header>
      <main>
            <p>
                Josua Ehlers<br />
                Albertstraße 23<br />
                45894 Gelsenkirchen<br />
                Website: <a href="https://josuaehlers.de/">https://josuaehlers.de/</a><br />
                E-Mail: <a href="mailto:ehlersjosua@gmail.com">ehlersjosua@gmail.com</a><br />
            </p>
            <h2>HAFTUNG FÜR INHALTE</h2>
            <p>
                Die Inhalte unserer Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Aus der Nutzung dieser Informationen abgeleitete Haftungsansprüche sind ausgeschlossen.
            </p>
            <h2>HAFTUNGSAUSSCHLUSS FÜR LINKS</h2>
            <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht durchzuführen. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
      </main>
    </div>
  );
};

export default Impressum;
