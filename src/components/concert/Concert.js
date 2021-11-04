import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Image, Header } from 'semantic-ui-react'
import './ConcertStyle.css'
import {Link, useParams} from "react-router-dom";
import ConcertContent from './ConcertContent'
import Sidebar from './Sidebar'


const Concert = (props) => {
  let { name } = useParams();
  const [page, setPage] = useState("")
  console.log(props)
  return(
    <div className="cities">
    <Container>
      <Grid>
        <Grid.Column width={15} className="concertHeaderColumn">
          <Header className="ConcertHeader" as='h2'>
            <Link className="ConcertLinks" to="/">{props.link1}</Link>
            <Link className="ConcertLinks"  itemprop="name" to={"/"+props.link2}>{props.link2}</Link>
            {name}
          </Header>
        </Grid.Column>
    </Grid>

    <Grid>
      <Grid.Column computer={11} mobile={16}  className="concert">
      {
        props.page==="o-szpiegu" && page=="" ?
        setPage(`<h1 class="ui header">O Szpiegu</h1>
                <p>Pomysł Szpiega kulturalnego pojawił się w 2010 roku i do tej pory funkcjonował głównie w mediach społecznościowych. Szpieg to tej pory zbierał i wspierał działania Punktów Informacji Kulturalnej. Teraz dokładnie 10 lat później projekt pojawia się w nowej indywidualnej internetowej odsłonie. <b>SzpiegKulturalny.pl</b> to ogólnopolski agregator wydarzeń kulturalnych, który pozwala w jednym miejscu wyszukać wydarzenie i jednocześnie kupić na nie bilet.</p>
            <hr/>
            <p>Jeśli masz pytania, chcesz zgłosić wydarzenie lub reprezentujesz bileterie, której u nas nie ma, to napisz do nas na adres <a href="mailto:info@szpiegkulturalny.pl">info@szpiegkulturalny.pl</a>
            </p><p>
<b>Wydawcą serwisu <b>SzpiegKulturalny.pl</b> jest <a target="_BLANK" href="PIK.plus">PIK.plus</a></b></p>
          `)

        : null
      }
      {
        props.page==="reklama" && page=="" ?
        setPage(`<h1 class="ui header">Reklama</h1><hr class="light"/>
                <p><b>Punkt Informacji Kulturalnej</b>, po ponad 10 latach działalności, ma wyraźną pozycję i markę na rynku lokalnym. Wciąż udoskonalamy portal, by stał się bardziej atrakcyjny dla użytkowników, współpracujących instytucji, a także reklamodawców.</p>
                <p>Według Google Analytics średni miesięczny przyrost odwiedzin strony to  2 – 5 %, jednocześnie nasz portal jest jedną z najlepiej pozycjonowanych stron o wydarzeniach w wyszukiwarce Google.</p>
                <p>Grupa docelowa PIK to nie tylko studenci, ale przede wszystkim miłośnicy kultury, dla których Wrocław to miejsce wyraźnie tętniące wydarzeniami na tym polu.</p>
                <p><b>Proponujemy Państwu zamieszczenie treści reklamowej w dostępnych miejscach na naszej stronie:</b></p>
                <ul>
                  <li><b>Top Banner</b> – max szerokość 800 px na 150 px (.jpg, .gif)</li>
                  <li><b>Billboard</b> – max szerokość 1000 px na 150 px (.jpg, .gif)</li>
                  <li><b>Banner (Skyscraper)</b> – max szerokość 130 px wysokość do 600 px. (.jpg, .gif)</li>
                  <li><b>Banner (Rectangle)</b> – max szerokość 310 px wysokość do 310 px. (.jpg, .gif)</li>
                  <li><b>Banner</b> – max szerokość 310 px wysokość do 100 px. (.jpg, .gif)</b></li>
                  <li><b>Banner (Button)</b> – max szerokość 125 px wysokość 125 px (.jpg, .gif)</li>
                </ul>
                <hr class="light" />
                <p><b>Cennik:</b></p>
                <p>Ceny poszczególnych kampanii reklamowych i ich długość ustalane są indywidualnie, przez wzgląd na uważny dobór reklamowanych na <b>PIK</b> treści.
Każdą zgłoszoną ofertę rozpatrujemy pod kątem zgodności z grupą docelową portalu i po akceptacji uzgadniamy warunki emisji.</p>
<p>Zapytania  prosimy kierować na nasz adres: <a href="mailto:info@szpiegkulturalny.pl">info@szpiegkulturalny.pl</a>
</p>
          `)

        : null
      }
      {
        props.page==="polityka-prywatnosci" && page=="" ?
        setPage(`<h2>Polityka prywatności</h2><div class="entry-content">
                                            <h1 class="cms-head"><span style="font-size: 14pt;"><b>Oświadczenie o ochronie danych osobowych</b></span></h1>
<p><strong>Działając w wykonaniu ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (dalej: RODO) informujemy, iż:</strong></p>
<ol>
<li>administratorem Państwa danych osobowych jest Punkt Informacji Kulturalnej – Marcin Skarżyński&nbsp; z siedzibą przy ul. Pięknej 23b/27, 50-506 Wrocław;</li>
<li>w razie jakichkolwiek pytań odnośnie przetwarzania danych osobowych należy kontaktować się bezpośrednio z administratorem danych osobowych pod adresem e-mail:&nbsp;rodo@pik.poznan.pl</li>
<li>Państwa dane osobowe przetwarzane będą w celach marketingowych usług i produktów na podstawie wyrażonych zgód tj. na podstawie art. 6 ust. 1 pkt a RODO;</li>
<li>odbiorcą Państwa danych osobowych będą podmioty przetwarzające dane osobowe na zlecenie administratora, m.in. dostawcy usług IT, przy czym takie podmioty przetwarzają dane na podstawie umowy z administratorem i wyłącznie zgodnie z poleceniami administratora;</li>
<li>Państwa dane osobowe nie będą przekazywane do państwa trzeciego/organizacji międzynarodowej;</li>
<li>Państwa dane osobowe będą przechowywane do momentu cofnięcia wyrażonej zgody lub zgód;</li>
<li>posiadają Państwo prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania (jeżeli przetwarzanie odbywa się na podstawie zgody), którego dokonano na podstawie zgody przed jej cofnięciem;</li>
<li>mają Państwo prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych, gdy uznają Państwo, iż przetwarzanie danych osobowych Państwa dotyczących narusza przepisy RODO;</li>
<li>podanie przez Państwa danych osobowych jest dobrowolne, jednak niezbędne do otrzymywania informacji o produktach i usługach oferowanych przez administratora.</li>
</ol>
<hr class="light">
<p class="cms-head"><span style="font-size: 12pt;">Oświadczenie o ochronie danych osobowych&nbsp;Dotyczące przetwarzania danych osobowych w systemach online oraz przy nawiązywaniu kontaktu przez formularze kontaktowe i newslettery przesyłane pocztą elektroniczną</span></p>
<p>Ochrona danych osobowych jest dla nas sprawą niezwykle ważną. Z tego względu pragniemy poinformować Państwa, jakie informacje są zbierane na naszych stronach internetowych, do jakiego celu są stosowane, komu są ew. udostępniane i jakimi prawami Państwo dysponują (art. 12 i art. 13 rozporządzenia w sprawie ochrony danych osobowych (RODO).</p>
<p><strong>Jednostką odpowiedzialną za ochronę danych osobowych na podstawie umowy powierzenia jest&nbsp;</strong></p>
<p>Hekko.pl – H88 S.A. z siedzibą w Poznaniu,<br>
Franklina Roosevelta 22,<br>
60-829 Poznań,<br>
<span class="ColorFD5900">NIP:</span>&nbsp;7822622168<br>
<span class="ColorFD5900">REGON:</span>&nbsp;364261632<br>
<span class="ColorFD5900">KRS:</span>&nbsp;0000612359</p>
<p>Polityka prywatności Hekko.pl https://www.hekko.pl/polityka_prywatnosci.html</p>
<hr class="light">
<p class="p1"><span class="s1">Ogólnie nie są Państwo zobowiązani do podawania żadnych danych osobowych w celu odwiedzenia naszej strony internetowej. Jednak z technicznego punktu widzenia adres IP przesyłany przez Państwa system wymaga przesyłania Państwu danych z naszej strony internetowej. Poza ogólnie dostępnym obszarem naszej strony internetowej, np. w ramach Państwa rejestracji, możemy potrzebować Państwa danych osobowych, aby móc odpowiedzieć osobiście na Państwa pytania.</span></p>
<hr class="light">
<p><b>Gromadzenie, przechowywanie danych dotyczących użytkowania podczas odwiedzin na naszej stronie bez rejestracji, korzystanie z plików cookie.</b></p>
<p class="p1"><span class="s1">Podczas odwiedzin na naszej stronie internetowej otrzymujemy od pełny adres IP z Państwa komputera. Tylko za pomocą tego adresu IP możemy przesyłać dane z naszej strony internetowej do Państwa w celu wyświetlenia strony internetowej (§ 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 b i f) RODO). Oprócz przetwarzania w celu przesłania pobranych danych, pełny adres IP jest przechowywany tylko przez dwa dni w celu umożliwienia podjęcia środków obronnych w przypadku ataków na naszą IT, np. zablokowania adresów IP, jak również w razie potrzeby wszczęcia postępowania karnego (§ 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 f RODO). </span></p>
<p class="p1"><span class="s1">Przechowujemy datę i godzinę wizyty oraz stronę, z której nasza strona została wywołana. Nie przechowujemy żadnych innych danych osobowych, dopóki Państwo się nie zalogują.</span></p>
<p class="p1"><span class="s1">Jeśli programowanie naszej strony internetowej spowoduje, że przeglądarka użytkownika będzie odczytywać dane z serwerów obsługiwanych przez strony trzecie, my sami nie bierzemy udziału w tym przenoszeniu danych. Nasi dostawcy zewnętrzni poprosili nas o poinformowanie Państwa w następujący sposób:</span></p>
<hr class="light">
<p><b></b><span class="s1"><b>Google Analytics</b></span></p>
<p class="p1"><span class="s1">Korzystamy z Google Analytics, usługi analizy sieci Google Inc. (1600 Amfiteatr Parkway, Mountain View, CA 94043, USA; „Google”). Google Analytics wykorzystuje </span><span class="s2">pliki cookie </span><span class="s1"><span class="Apple-converted-space">&nbsp; </span>wyświetlane w naszych wytycznych, które umożliwiają analizę korzystania z naszych witryn internetowych i usług online. Generowane informacje, w tym informacje o zdarzeniach dotyczących urządzeń, takich jak awarie, aktywność systemu, ustawienia sprzętowe, typ przeglądarki, wersja przeglądarki, język przeglądarki, zainstalowane dodatki, rozdzielczość ekranu, typ urządzenia, data i godzina zapytania i odsyłający adres URL, o korzystaniu z tych stron internetowych i ofert online, są przekazywane w naszym imieniu do serwera Google w USA i przechowywane przez czas nieokreślony. Google Analytics używamy tylko z aktywnym rozszerzeniem anonimizacji IP „_anonymizeIp()“. Oznacza to, że adresy IP przesyłane do Google są wcześniej skracane i dalej przetwarzane przez Google na serwerach znajdujących się w UE w celu wykluczenia bezpośredniego odniesienia do osoby poprzez adres IP w USA. Tylko w wyjątkowych przypadkach pełny adres IP zostanie przesłany do serwera Google w USA i tam skrócony.</span></p>
<p class="p1"><span class="s1">Informacje te wykorzystujemy do oceny wizyt na stronie internetowej, do sporządzania dla nas raportów dotyczących aktywności na stronie internetowej, aby lepiej zrozumieć, w jaki sposób nasza strona jest wykorzystywana i gdzie możemy ją ulepszyć (§ 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 b i f RODO). Z przetwarzanych danych mogą być tworzone pseudonimowe profile użytkowania. Google może również przekazywać te informacje osobom trzecim, jeśli jest to wymagane przez prawo lub jeśli osoby trzecie przetwarzają te dane na zlecenie Google. W żadnym przypadku firma Google nie będzie łączyła adresu IP użytkownika z żadnymi innymi danymi będącymi w jej posiadaniu.</span></p>
<p class="p1"><span class="s1">Więcej informacji na temat wykorzystania danych przez Google do celów reklamowych oraz możliwości ustawień i sprzeciwu można znaleźć na stronach internetowych Google: https://www.google.com/intl/de/policies/privacy/partners/ („Korzystanie z danych przez Google podczas korzystania z witryn lub aplikacji naszych partnerów“), http://www.google.com/policies/technologies/ads („Wykorzystywanie danych do celów reklamowych“), http://www.google.de/settings/ads („Zarządzanie informacjami, których używa Google do wyświetlania reklam.“) oraz http://www.google.com/ads/preferences/ („Proszę określić, która reklama Google zostanie Państwu wyświetlone”.)</span></p>
<p class="p1"><span class="s1">Mają Państwo prawo do sprzeciwu i uniemożliwienia instalacji i przechowywania plików cookie dla Google Analytics, dokonując odpowiednich ustawień w przeglądarce. Szczegółowe informacje można znaleźć w pomocy przeglądarki. Użytkownik może również uniemożliwić Google zbieranie danych generowanych przez cookie i związanych z korzystaniem przez niego z witryny oraz przetwarzanie tych danych przez Google, pobierając i instalując wtyczkę do przeglądarki Google dostępną pod poniższym linkiem.<span class="s3">http://tools.google.com/dlpage/gaoptout?hl=pl</span></span></p>
<p class="p1"><span class="s1">Plik cookie typu opt-out jest ustawiony tak, aby uniemożliwić przyszłe zbieranie danych podczas odwiedzania tej strony internetowej. Zbieranie i przechowywanie danych dla Google Analytics można w każdej chwili odwołać za pomocą tej wtyczki w przeglądarce, ze skutkiem na przyszłość. </span></p>
<hr class="light">
<p><span class="s1"><b>Śledzenie konwersji Google</b></span></p>
<p class="p1"><span class="s1">Jako klient AdWords korzystamy również ze śledzenia konwersji Google, usługi analizy świadczonej przez Google Inc. (1600 Amfiteatr Parkway, Mountain View, CA 94043, USA; „Google”). Google Adwords umieszcza na komputerze użytkownika plik cookie (cookie konwersji), jeśli użytkownik uzyskał dostęp do naszej strony internetowej za pośrednictwem ogłoszenia Google. Te pliki cookie tracą ważność po 30 dniach i nie są wykorzystywane do identyfikacji osoby. Jeśli odwiedzają Państwo nasze określone strony, a plik cookie nie wygasł, my i Google możemy rozpoznać, że ktoś kliknął na reklamę i został przekierowany na naszą stronę. Każdy klient AdWords otrzymuje inny plik cookie. Pliki cookie </span><span class="s4">nie</span><span class="s1"> mogą być wykorzystywane do identyfikacji użytkownika lub jego drogi w Internecie podczas kolejnych wizyt na różnych stronach internetowych. Informacje zbierane za pomocą plików cookie konwersji służą do generowania statystyk konwersji dla klientów AdWords, którzy zdecydowali się na śledzenie konwersji. W ten sposób otrzymujemy statystyki użytkowania dotyczące tych użytkowników, którzy uzyskują dostęp do naszej strony internetowej za pośrednictwem reklamy Google i możemy w ten sposób śledzić, które z naszych reklam są skuteczne i pasują do tematu Państwa wyszukiwania (§ 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 f RODO). </span></p>
<p class="p1"><span class="s1">Jako klient AdWords widzimy całkowitą liczbę użytkowników, którzy kliknęli na nasze ogłoszenie i zostali przekierowani na stronę z tagiem do śledzenia konwersji. Nie otrzymujemy jednak żadnych informacji umożliwiających identyfikację użytkowników. Jeśli użytkownik nie chce uczestniczyć w procesie śledzenia, może odrzucić zapisanie pliku cookie – należy to zrobić w ustawieniach przeglądarki, które umożliwia ogólną dezaktywację automatycznego zapisywania plików cookie. Użytkownik ma prawo do sprzeciwu i może uniemożliwić instalację plików cookie dla Google AdWords (w domenie „googleadservices.com”) poprzez ustawienie swojej przeglądarki tak, aby blokowała pliki cookie z domeny „googleadservices.com”. Szczegółowe informacje można znaleźć w pomocy przeglądarki. Odpowiednie nazwy plików cookie można znaleźć w naszych wytycznych dotyczących plików cookie.</span></p>
<p class="p1"><span class="s1">Tutaj znajduje się oświadczenie o ochronie danych osobowych (https://policies.google.com/privacy?hl=pl</span><span class="s1">).</span></p>
<hr class="light">
<p><b></b><span class="s1"><b>Remarketing Google</b></span></p>
<p class="p1"><span class="s1">Korzystamy z technologii remarketingu Google Inc. (1600 Amfiteatr Parkway, Mountain View, CA 94043, USA; „Google”). Technologia ta pozwala użytkownikom, którzy już odwiedzili nasze strony internetowe i usługi online oraz są zainteresowani ofertą, na ponowny kontakt poprzez ukierunkowaną reklamę na stronach Sieci Partnerskiej Google. Wyświetlenie reklamy odbywa się za pomocą plików cookie, które zawierają cyfrę. Pliki cookie są małymi plikami tekstowymi zapisywanymi na komputerze użytkownika. Cyfra ta służy do rejestrowania wizyt na stronie internetowej oraz anonimowych danych dotyczących korzystania z niej Google konsoliduje te dane w ujęciu dla wszystkich usług i urządzeń. Reklama może być wyświetlana na podstawie informacji uzyskanych w wyniku używania urządzeń. Zgodnie z własnymi informacjami Google nie gromadzi i nie przechowuje żadnych danych osobowych osób odwiedzających stronę internetową w trakcie tego procesu. W przypadku innej wizyty na innej stronie internetowej w sieci wyświetlania Google, wyświetlane są reklamy, które z dużym prawdopodobieństwem mogą zawierać wcześniej dostępne produkty i obszary informacyjne. Pliki tekstowe mogą być wykorzystywane do analizy zachowań użytkowników podczas odwiedzania strony internetowej, a następnie do tworzenia ukierunkowanych rekomendacji produktowych dla produktów PIK oraz reklamy produktów PIK opartej na zainteresowaniach (wyświetlanie reklam pasujących do wcześniej odwiedzanych stron internetowych PIK) (§ 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 f RODO).</span></p>
<p class="p1"><span class="s1">Jeśli nie życzą sobie Państwo otrzymywać reklam (sprzeciw) opartych na zainteresowaniach, mogą Państwo wyłączyć korzystanie z plików cookie przez Google w tym celu, odwiedzając stronę <span class="s3">https://www.google.de/settings/ads</span> i dokonując odpowiednich ustawień. Użytkownicy mogą również wyłączyć wykorzystanie plików cookie przez dostawców zewnętrznych, odwiedzając stronę dezaktywacji Network Advertising Initiative. <span class="s3">http://www.networkadvertising.org/managing/opt_out.asp</span> Można również zablokować pliki cookie dla Google Remarketing, konfigurując swoją przeglądarkę. Szczegółowe informacje można znaleźć w pomocy przeglądarki. Odpowiednie nazwy plików cookie można znaleźć w naszym </span><span class="s5">wyjaśnieniu dotyczącym plików cookie</span><span class="s1">.</span></p>
<p class="p1"><span class="s1">Oświadczenie o ochronie danych osobowych można sprawdzić na stronie <span class="s6">http://www.google.com/privacy/ads/</span>.</span></p>
<hr class="light">
<p><b></b><span class="s1"><b>Google Tag Manager</b></span></p>
<p class="p4"><span class="s1">Ta strona internetowa korzysta z Google Tag Manager. Google Tag Manager to rozwiązanie, które pozwala marketingowcom zarządzać znacznikami stron internetowych za pomocą jednego interfejsu. Tool Tag Manager (który implementuje znaczniki) jest domeną bez plików cookie i nie gromadzi żadnych danych osobowych. Narzędzie przekazuje tylko dane i uruchamia inne znaczniki, które z kolei mogą być w stanie zbierać dane w niektórych okolicznościach. Google Tag Manager nie uzyskuje dostępu do tych danych. Jeśli dezaktywacja została dokonana na poziomie domeny lub plików cookie, pozostanie ona w mocy dla wszystkich tagów śledzących zaimplementowanych za pomocą Google Tag Manager.</span></p>
<hr class="light">
<p><b></b><span class="s1"><b>Google Maps</b></span></p>
<p class="p1"><span class="s1">Na stronie internetowej używamy map Google Maps, aby pomóc Ci w znalezieniu drogi. Google Maps jest usługą Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google”). Podczas wywołania strony kontaktów przeglądarka WWW użytkownika otrzymuje polecenie wczytania niezbędnych funkcji i danych mapy bezpośrednio z serwera Google. Serwery te mogą być zlokalizowane w USA lub innych krajach świata. Nie mamy w tym zakresie żadnych możliwości kontroli i nie otrzymujemy od Google żadnych informacji, czy podczas odwiedzania naszej strony użytkownik wymieniał się informacjami o mapach. Nie wiemy, czy Google dostarcza Państwu technicznie niezbędnych informacji lub przechowuje i ocenia dalsze dane dotyczące Państwa lub Państwa systemu, np. adresy IP, informacje o Państwa przeglądarce itp. Oświadczenie o ochronie danych<span class="Apple-converted-space">&nbsp; </span>osobowych (https://policies.google.com/privacy?hl=pl&nbsp;</span><span class="s1">) obowiązuje również dla Google Maps. Wskazujemy w szczególności na to, że Google przetwarza następujące kategorie danych: informacje o urządzeniu, adres IP, ustawienia sprzętowe, typ przeglądarki, język przeglądarki, data i godzina zgłoszenia i odsyłający adres URL, pliki cookie (które można zablokować w ustawieniach przeglądarki, proszę sprawdzić również powyżej), informacje dotyczące lokalizacji. Google może łączyć dane z innymi danymi pochodzącymi od użytkownika i wykorzystywać dane zebrane w związku z tymi usługami do świadczenia, utrzymywania, ochrony i ulepszania usług Google, rozwijania nowych usług oraz ochrony Google i jej użytkowników. Google również wykorzystuje te informacje, aby zapewnić użytkownikom dostosowane do ich potrzeb treści – na przykład w celu uzyskania bardziej przydatnych wyników wyszukiwania i reklamy. Google wykorzystuje dane gromadzone za pomocą plików cookie i innych technologii, takich jak znaczniki pikseli, do poprawy komfortu użytkowania i ogólnej jakości usług Google. Google umożliwia na przykład zapisanie preferowanego ustawienia języka w celu wyświetlania usług w preferowanym języku. Zanim Google będzie wykorzystywać informacje do celów innych niż określone w oświadczeniu o ochronie danych osobowych Google, poprosi o zgodę użytkownika. Za Państwa zgodą, w celu realizacji operacji związanych z przetwarzaniem danych oraz ze względów prawnych Google przekazuje dane osobom trzecim. Można również zmienić ustawienia dotyczące ochrony danych w Google po zalogowaniu się. Google przestrzega również kilku zobowiązań samoregulacyjnych, w tym umowy między UE a USA dotyczące Privacy Shield oraz rozpatruje skargi.</span></p>
<hr class="light">
<p><b></b><span class="s1"><b>Korzystanie z pikseli Facebooka</b></span></p>
<p class="p1"><span class="s1">Ta strona korzysta z funkcji remarketingu „Piksele Facebooka” firmy Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irlandia („Facebook”), której dane są przetwarzane przez Facebook Inc, 1601 S. California Ave, Palo Alto, CA 94304, USA. Ta aktywna funkcja programu (JavaScript) jest używana do zrozumienia działań osób odwiedzających tę stronę internetową, do pomiaru skuteczności reklamy oraz do prezentowania reklam opartych na zainteresowaniach („reklam na Facebooku”) podczas odwiedzania portalu społecznościowego Facebook i innych stron internetowych. Ten JavaScript ustanawia bezpośrednie połączenie z serwerami Facebooka podczas odwiedzania strony internetowej. Informacje te są przekazywane na serwer Facebooka, że użytkownik odwiedził tę stronę internetową, a Facebook przypisuje te informacje do osobistego konta użytkownika Facebooka i innych profili. Przypisanie to próbuje działać na różnych urządzeniach, tak aby można było ocenić, jak zachowują się odwiedzający na różnych urządzeniach. Podstawą użytkowania są § 28 ust. 1 zd. 1 nr 2 BDSG s.w.; art. 6 ust. 1 f RODO. Jednakże Facebook przechowuje i przetwarza dane w taki sposób, aby możliwe było połączenie z odpowiednim profilem użytkownika oraz aby Facebook mógł wykorzystywać te dane do własnych celów reklamowych zgodnie z wytycznymi Data Usage Guidelines Facebooka (</span><span class="s5">https://www.facebook.com/about/privacy/</span><span class="s1">). Zakładamy, że informacje pozostaną zapisane do momentu usunięcia konta na Facebooku. Więcej informacji na temat gromadzenia i wykorzystywania danych przez Facebook oraz praw i możliwości w zakresie ochrony prywatności można znaleźć w wytycznych dotyczących ochrony danych Facebooka pod adresem </span><span class="s5">https://www.facebook.com/about/privacy/</span><span class="s1">. Możesz zarządzać ustawieniami prywatności na swoim koncie na Facebooku. Aby było to możliwe, konieczne jest zalogowanie się na Facebooku.</span></p>
<p class="p1"><span class="s1">Proszę kliknąć </span><span class="s2">ten link</span><span class="s1">, aby w przyszłości zapobiec rejestracji przez Facebooka na tej stronie internetowej (Opt-Out funkcjonuje tylko w tej przeglądarce i tylko dla tej domeny), korzystając z prawa do sprzeciwu. Wówczas na Państwa urządzeniu zapisywany jest plik cookie Opt-Out. Usunięcie plików cookies w tej przeglądarce powoduje konieczność powtórnego kliknięcia tego linka.</span></p>
<ol class="ol1">
<li style="list-style-type: none;"></li>
</ol>
<ol class="ol1">
<li style="list-style-type: none;"></li>
</ol>
<hr class="light">
<p class="p1"><span class="s1"><b>Formularze kontaktowe</b></span></p>
<p class="p1"><span class="s1">W przypadku korzystania z formularzy kontaktowych wprowadzone tam informacje są nam przekazywane i przez nas przechowywane, zgodnie z naszym uprawnionym interesem dotyczącym szybkości i optymalizacji naszej oferty online oraz serwisu klienta. Wykorzystujemy dane wyłącznie w celu odpowiedzi na Państwa zapytanie oraz, jeśli zapytanie odnosi się do stosunku umownego lub wynika z niego stosunek umowny, w celu nawiązania i obsługi stosunku umownego (§ 28 ust. 1 zd. pkt. 1, 2 BDSG s.w.; art. 6 ust. 1 a, b, f RODO). Jeśli jesteście Państwo już naszym klientem lub zostaniecie nim w przyszłości, jesteśmy uprawnieni do gromadzenia, przechowywania, zmiany i przekazywania danych w celu uzasadnienia, realizacji lub zakończenia stosunku umownego, bez konieczności uzyskania Państwa zgody, tak długo, jak zezwala na to ustawa. </span></p>
<p class="p1"><span class="s1">W innych przypadkach, również wtedy, gdy stosunek umowny jeszcze nie został nawiązany, przechowujemy Państwa dane nie dłużej niż przez 2 lata lub – jeśli wymagają od nas tego przepisy prawne – przez dłuższy okres czasu. Mają Państwo prawo sprzeciwu wobec przekazywania nam danych z formularzy kontaktowych, ze skutkiem na przyszłość. Sprzeciw mogą Państwo wyrazić powiadamiając nas o nim.<span class="Apple-converted-space">&nbsp; &nbsp;</span></span></p>
<hr class="light">
<p class="p1"><span class="s1"><b>Newsletter wysyłany e-mailem i inne reklamy bezpośrednie</b></span></p>
<p class="p1"><span class="s1">Jeśli używając swojego adresu e-mail zarejestrowali się Państwo w celu otrzymywania naszego newslettera, wykorzystamy Państwa adres e-mail nie tylko do prowadzenia konta, lecz również do zdefiniowanych bliżej przy logowaniu do newslettera celów reklamowych do czasu, aż nie wyrejestrują się Państwo z otrzymywania newslettera (możliwość sprzeciwu; § 28 ust. 1 zd. 1 pkt 1 BDSG s.w.; art. 6 ust. 1 a, b RODO). Jeśli nie będą zdefiniowane żadne inne cele reklamowe, nasz newsletter będzie zawierał tylko informacje o wydarzeniach kulturalnych sporadycznie treści reklamowe. Subskrybując nasz newsletter, wyrażają Państwo zgodę na jego otrzymywanie i realizację opisanych procedur. </span></p>
<p class="p1"><span class="s1">Do wysyłki materiałów marketingowych i inforamyjnych e-mailem wykorzystujemy wtyczkę Newsletter https://pl.wordpress.org/plugins/newsletter/ Państwa dane na podstawie umowy powierzenia powierzone są firmie hostingującej.</span></p>
<p class="p1"><span class="s1">W każdej chwili mogą Państwo cofnąć swoją zgodę na otrzymywanie naszego newslettera. Wylogować można się klikając link w newsletterze.</span></p>
<p class="p1"><span class="s1">Zgody na wysyłanie adresów e-mail są wyrażane na podstawie art. 6 ust. 1 (a), art. 7 RODO oraz § 7 ust. 2 pkt 3 lub ust. 3 UWG. Zaangażowanie dostawcy usług wysyłkowych, gromadzenie statystycznych danych i przeprowadzanie analiz oraz protokołowanie procedur logowania jest wykonywane na podstawie naszego prawnie uzasadnionego interesu, zgodnie z art. 6 ust. 1 (f) RODO. Nasz interes jest ukierunkowany na wykorzystanie przyjaznego dla użytkownika i bezpiecznego systemu dystrybucji newsletterów, który będzie zarówno służył naszym celom handlowym, takim jak reklama bezpośrednia, jak i spełniał oczekiwania użytkowników.</span></p>
<p class="p1"><span class="s1">Ponieważ wykorzystujemy Państw</span><span class="s1">a dane osobowe w celu reklamy bezpośredniej, mogą Państwo w każdej chwili zawiadomić nas o swoim sprzeciwie zgodnie z art. 21 RODO.</span></p>
<hr class="light">
<p><span class="s2"><b>Terminy przechowywania danych</b></span></p>
<p class="p2"><span class="s2">Jeśli przy pozyskiwaniu danych (np. w ramach deklaracji zgody) nie podano wyraźnego okresu przechowywania danych, dane osobowe zostaną usunięte, kiedy nie będą już potrzebne do realizacji celu, w którym zostały zapisane, chyba że usunięcie nie będzie możliwe ze względu na prawnie ustalony obowiązek przechowywania (np. obowiązek przechowywania danych handlowych i podatkowych).</span></p>
<hr class="light">
<p><b></b><span class="s2"><b>Państwa prawa w zakresie dostępu do danych, ich sprostowania, zablokowania, usunięcia, uzupełnienia, ograniczenia ich przetwarzania oraz ich przenoszenia.</b></span></p>
<p class="p1"><span class="s2">Otrzymają Państwo bez podania przyczyn bezpłatną informację, czy Państwa dane osobowe są przetwarzane. Zgodnie z art. 15 RODO, §§ 34 BDSG s.w. mają Państwo prawo do uzyskania dostępu do przechowywanych u nas danych osobowych oraz dalszych informacji dotyczących ich przetwarzania. </span></p>
<p class="p1"><span class="s2">Zgodnie z art. 16, art. 17 RODO, §35 BDSG mają Państwo ustawowe prawo do zablokowania, korekty lub usunięcia przechowywanych u nas danych. </span></p>
<p class="p1"><span class="s2">Usunięcie Państwa danych osobowych nastąpi wtedy, gdy nie ma ku temu żadnych przeciwwskazań wynikających z ustawowych obowiązków przechowywania danych i gdy dostarczą Państwo prośbę o usunięcie danych w formie pisemnej.</span></p>
<p class="p1"><span class="s2">Ponadto mają Państwo prawo do uzupełnienia danych oraz, w uregulowanych prawem przypadkach, zgodnie z art. 18 RODO, do zażądania ograniczenia ich przetwarzania, jeśli nie została potwierdzona ich prawidłowość.</span></p>
<p class="p1"><span class="s2">Ponadto zgodnie z art. 20 RODO mają Państwo prawo do przenoszenia danych, jeśli w niniejszej deklaracji jako przyczynę przetwarzania danych wymieniono art. 6 ust. 1 a lub b RODO lub art. 9 ust. 2 a RODO. Korzystając z prawa do przenoszenia danych mogą Państwo zażądać, by dane osobowe zostały przeniesione bezpośrednio z jednej odpowiedzialnej lokalizacji do innej odpowiedzialnej lokalizacji, jeśli jest to technicznie wykonalne.</span></p>
<hr class="light">
<p><b></b><span class="s2"><b>Prawa do sprzeciwu</b></span></p>
<p class="p1"><span class="s2">Mogą Państwo w każdej chwili cofnąć udzielone zgody na pozyskiwanie danych i ich wykorzystywanie, bez podania przyczyn, ze skutkiem w przyszłość. Nie narusza to legalności przetwarzania danych wykonywanego od momentu udzielenia zgody do momentu jej wycofania. Po wycofaniu zgody Punkt Inforamcji Kulturalnej może przetwarzać Państwa dane osobowe tylko w takim zakresie, w jakim nakazuje to inna podstawa prawna lub obowiązki ustawowe. Swoje cofnięcie zgody mogą Państwo skierować do osoby odpowiedzialnej lub wysłać na adres kontaktowy podany w stopce redakcyjnej.&nbsp;</span></p>
<hr class="light">
<p class="p1"><span class="s1">Niezależnie od regulacji niniejszego oświadczenia o ochronie danych na mocy ustaleń przestawionych w art. 13 ust. 2 zd. 1 RODO danych mają Państwo prawo do wniesienia skargi do odpowiedniego organu nadzorczego. </span></p>
<hr class="light">
<p><span class="s2" style="font-size: 12pt;"><b>Pliki cookies podczas wizyty na naszej stronie internetowej</b></span></p>
<p><span style="font-size: 12pt;">Przez używanie Stron PIK wyrażasz zgodę na używanie ciasteczek zgodnie z tą Polityką Ciasteczek. Jeżeli nie zgadzasz się na używanie przez nas ciasteczek, powinieneś zmienić ustawienia swojej przeglądarki w odpowiedni sposób lub zrezygnować z używania Stron PIK-a.</span></p>
<p><span style="font-size: 12pt;">Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.</span></p>
<h2><span style="font-size: 12pt;"><strong>Co to są ciasteczka?</strong></span></h2>
<p><span style="font-size: 12pt;">Ciasteczka (ang. cookies) to niewielkie pliki, zapisywane i przechowywane na twoim komputerze, tablecie lub smartphonie podczas gdy odwiedzasz różne strony w internecie. Ciasteczko zazwyczaj zawiera nazwę strony internetowej, z której pochodzi, „długość życia” ciasteczka (to znaczy czas jego istnienia), oraz przypadkowo wygenerowany unikalny numer służący do identyfikacji przeglądarki, z jakiej następuje połączenie ze stroną internetową.</span></p>
<h2><span style="font-size: 12pt;"><strong>Pliki cookies wykorzystywane są w celu:</strong></span></h2>
<ul>
<li><span style="font-size: 12pt;">Dostosowania zawartości stron internetowych do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb.</span></li>
<li><span style="font-size: 12pt;">Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości.</span></li>
</ul>
<h2><span style="font-size: 12pt;"><strong>Jak długo przechowywane są dane w ciasteczkach?</strong></span></h2>
<p><span style="font-size: 12pt;">Na Stronach PIK mogą być używane dwa rodzaje ciasteczek – sesyjne oraz stałe. Te pierwsze pozostają na Twoim urządzeniu jedynie podczas korzystania ze Strony. Ciasteczka stałe pozostają na Twoim urządzeniu tak długo jak długo mają ustawiony czas życia lub do momentu kiedy je usuniesz. (Słodkie ciastka woli jeść niż długo je przechowywać <img class="_1ift _2560 img disappear" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z57/1/16/1f609.png" alt="😉"> )</span></p>
<p><span style="font-size: 12pt;"><strong>Jakie ciasteczka mamy w menu ?</strong></span></p>
<p><span style="font-size: 12pt;"><em>Konieczne do działania stron:</em>&nbsp;Niezbędne do prawidłowego funkcjonowania pozwalają Ci na poruszanie się po nich oraz używanie ich elementów. Przykładowo mogą zapamiętywać poprzednie czynności (np. otwarte teksty) podczas wracania na stronę w tej samej sesji.</span><br>
<span style="font-size: 12pt;"> <em>Poprawiające wydajność i fukcjonalność lub też reklamowe&nbsp;</em></span><br>
<span style="font-size: 12pt;"> Zbieranie informacji o tym jak odwiedzający korzystają ze strony poprzez dostarczanie informacji na temat obszarów które odwiedzają, czasu jaki na nich spędzają oraz problemów jakie na nich napotykają, jak np. komunikaty o błędach.</span><br>
<span style="font-size: 12pt;"> Dostarczani reklam odpowiadających zainteresowaniom oraz ograniczanie liczby wyświetleń danej reklamy. Te ciasteczka pozwalają nam także mierzyć efektywność kampanii reklamowych.</span></p>
<p><span style="font-size: 12pt;">W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).</span></p>
<p><span style="font-size: 12pt;">Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</span></p>
<p><span style="font-size: 12pt;">Więcej informacji na temat plików cookies w sekcji „Pomoc” w menu przeglądarki internetowej.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;">Oświadczenie o ochronie danych osobowych</span></h2>
<p><span style="font-size: 12pt;">Dziękujemy za zainteresowanie naszą stroną internetową. Ochrona danych osobowych jest dla nas sprawą niezwykle ważną. W tym miejscu pragniemy przekazać informacje na temat ochrony danych osobowych w naszej firmie. Przestrzegamy przepisów Ustawy z dnia 29 sierpnia 1997 r.o Ochronie Danych Osobowych (Dz.U. 2014, poz. 1182 z zm.), Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144, poz. 1204 z zm.) oraz innych postanowień w tym zakresie. Państwa dane osobowe zostaną zakodowane przez cyfrowe systemy bezpieczeństwa przed przesłaniem ich do nas. Nasze strony internetowe są chronione przed uszkodzeniem, zniszczeniem lub dostępem osób nieupoważnionych odpowiednimi technikami.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Przedmiot ochrony danych osobowych</b></span></h2>
<p><span style="font-size: 12pt;">Przedmiotem ochrony danych osobowych są dane osobowe. Zgodnie z art. 6 Ustawy o ochronie danych osobowych obejmują one wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zindentyfikowania osoby fizycznej, bez nadmiernych kosztów, czasu lub działań. Należą do nich takie informacje, jak np. imię i nazwisko, adres pocztowy, adres e-mail lub numer telefonu.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Zakres pobierania i zapisywania danych</b></span></h2>
<p><span style="font-size: 12pt;">Zasadniczo w celu korzystania z naszej strony internetowej nie muszą Państwo podawać swoich danych osobowych. Abyśmy jednak faktycznie mogli wykonywać nasze usługi, konieczne jest otrzymanie Państwa danych osobowych. &nbsp;Jeżeli podali Państwo swój adres e-mail w celu przesyłania przez nas newslettera, będziemy wykorzystywać go również dla celów reklamowych, do momentu żądania przez Państwa usunięcia danych z listy newslettera.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Zbieranie i wykorzystywanie danych użytkowych</b></span></h2>
<p><span style="font-size: 12pt;">W celu optymalizacji naszej strony internetowej zbieramy i zapisujemy dane, takie jak np. data i godzina wejścia na stronę, strona, z której przeszli Państwo do naszej strony i zbliżone informacje, o ile nie odmówią Państwo zgody na ten rodzaj pobierania i zapisywania danych. Dane te są pobierane anonimowo, bez identyfikowania użytkownika strony. Ewentualnie tworzone są profile użytkownika przy użyciu pseudonimu. W ramach tych procesów nie ma miejsca łączenia osoby fizycznej oznaczonej danym pseudonimem z zebranymi danymi użytkowymi. W celu zbierania i zapisu danych użytkowych wykorzystujemy pliki cookie. Są to małe pliki tekstowe zapisywane na Państwa komputerze i służące do zapamiętywania informacji statystycznych, takich jak system operacyjny, przeglądarka internetowa, adres IP, poprzednio oglądana strona internetowa (polecający URL) oraz godzina odwiedzenia strony. Dane te zbieramy wyłącznie do celów statystycznych, aby zoptymalizować naszą stronę internetową i uatrakcyjnić przedstawiane przez nas oferty. Dane są zbierane i zapisywane wyłącznie w postaci anonimowej i pod pseudonimem i nie można na ich podstawie wywnioskować, o jaką osobę fizyczną chodzi.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Cookies</b></span></h2>
<p><span style="font-size: 12pt;">Strony internetowe można również przeglądać bez używania cookies. Jeżeli nie życzą sobie Państwo, abyśmy rozpoznawali Państwa komputer, można zapobiec zapisywaniu cookies na twardym dysku komputera przez wybranie w przeglądarce opcji „nie akceptuj plików cookie”. Jeżeli jednak pliki cookies nie będą akceptowane, może dojść do ograniczenia funkcjonalności naszej oferty internetowej. Mogą Państwo zapobiec instalacji plików cookie przez wprowadzenie odpowiednich ustawień w swojej przeglądarce internetowej. W tym celu należy wyłączyć funkcję zapisywania cookies. Więcej informacji znajduje się w instrukcji użytkowania przeglądarki internetowej.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Zastosowanie danych do specjalnych celów</b></span></h2>
<p><span style="font-size: 12pt;">Przestrzegamy zasad dotyczących wykorzystania danych do określonych celów: dane osobowe &nbsp;przetwarzamy i zapisujemy wyłącznie w celach, dla jakich zostały nam one przekazane. Bez wyraźnej zgody dane osobowe nie są przekazywane osobom trzecim. Dane są przekazywane do instytucji państwowych i urzędów upoważnionych do uzyskiwania informacji wyłącznie w ramach ustawowego obowiązku informowania, lub w razie otrzymania sądownej lub administracyjnej decyzji zobowiązującej do udzielenia informacji.</span></p>
<hr class="light">
<h2><span style="font-size: 12pt;"><b>Prawo do informacji i odwołania</b></span></h2>
<p><span style="font-size: 12pt;">W każdym momencie (nie częściej niż raz na 6 miesięcy) nasi klienci mogą zażądać udzielenia bezpłatnej informacji o danych zapisanych w naszych bazach, bez podawania przyczyn. Mogą Państwo w każdym momencie zażądać zablokowania, sprostowania lub skasowania zapisanych u nas danych i odmówić zgody na anonimowe pobieranie i zapisywanie danych w celu optymalizacji naszej strony internetowej. Mogą Państwo również odwołać udzieloną nam zgodę na zbieranie i wykorzystywanie danych osobowych bez podania przyczyn. Proszę skontaktować się tym celu z nami pod adresem rodo@pik.poznan.pl. W razie jakichkolwiek pytań i wskazówek dotyczących ochrony danych osobowych i ich przetwarzania jesteśmy do dyspozycji. Proszę pamiętać, że przepisy dotyczące danych osobowych i sposobu ich wykorzystania mogą się zmieniać na bieżąco. Dlatego zalecane i wymagane jest uzyskiwanie bieżących informacji dotyczących obowiązujących przepisów i praktyk stosowanych przez przedsiębiorstwa, np. Google.</span></p>
                                                                                </div>
          `)

        : null
      }
        <ConcertContent content={page} image={props.image}/>
      </Grid.Column>
      <Grid.Column  computer={4} mobile={0} floated="right" className="sidebar">
        <Sidebar/>
      </Grid.Column>
    </Grid>
    </Container>
    </div>
  )
}

export default Concert
