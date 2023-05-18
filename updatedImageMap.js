const assetMap = {
  // Alfabett
  'A': require('./assets/images/Alfabett/A.png'),
  'B': require('./assets/images/Alfabett/B.png'),
  'D': require('./assets/images/Alfabett/D.png'),
  'E': require('./assets/images/Alfabett/E.png'),
  'F': require('./assets/images/Alfabett/F.png'),
  'G': require('./assets/images/Alfabett/G.png'),
  'G%C4%A6': require('./assets/images/Alfabett/%C4%A0.png'),
  'H': require('./assets/images/Alfabett/H.png'),
  'I': require('./assets/images/Alfabett/I.png'),
  'IE': require('./assets/images/Alfabett/IE.png'),
  'J': require('./assets/images/Alfabett/J.png'),
  'K': require('./assets/images/Alfabett/K.png'),
  'L': require('./assets/images/Alfabett/L.png'),
  'M': require('./assets/images/Alfabett/M.png'),
  'N': require('./assets/images/Alfabett/N.png'),
  'O': require('./assets/images/Alfabett/O.png'),
  'P': require('./assets/images/Alfabett/P.png'),
  'Q': require('./assets/images/Alfabett/Q.png'),
  'R': require('./assets/images/Alfabett/R.png'),
  'S': require('./assets/images/Alfabett/S.png'),
  'T': require('./assets/images/Alfabett/T.png'),
  'U': require('./assets/images/Alfabett/U.png'),
  'V': require('./assets/images/Alfabett/V.png'),
  'W': require('./assets/images/Alfabett/W.png'),
  'X': require('./assets/images/Alfabett/X.png'),
  'Z': require('./assets/images/Alfabett/Z.png'),
  '%C4%8A': require('./assets/images/Alfabett/%C4%8A.png'),
  '%C4%A0': require('./assets/images/Alfabett/%C4%A0.png'),
  '%C4%A6': require('./assets/images/Alfabett/%C4%A6.png'),
  '%C5%BB': require('./assets/images/Alfabett/%C5%BB.png'),
  // Artikli
  'bil-': require('./assets/images/Artikli/bil-.png'),
  'bir-': require('./assets/images/Artikli/bir-.png'),
  'bit-': require('./assets/images/Artikli/bit-.png'),
  'biz-': require('./assets/images/Artikli/biz-.png'),
  'bi%C5%BC-': require('./assets/images/Artikli/bi%C5%BC-.png'),
  'd-': require('./assets/images/Artikli/d-.png'),
  'f\'': require('./assets/images/Artikli/f\'.png'),
  'id\-': require('./assets/images/Artikli/id-.png'),
  'il-': require('./assets/images/Artikli/il-.png'),
  'in-': require('./assets/images/Artikli/in-.png'),
  'ir-': require('./assets/images/Artikli/ir-.png'),
  'is-': require('./assets/images/Artikli/is-.png'),
  'it-': require('./assets/images/Artikli/it-.png'),
  'ix-': require('./assets/images/Artikli/ix-.png'),
  'i%C4%8B-': require('./assets/images/Artikli/i%C4%8B-.png'),
  'i%C5%BC-': require('./assets/images/Artikli/i%C5%BC-.png'),
  'l-': require('./assets/images/Artikli/l-.png'),
  'r-': require('./assets/images/Artikli/r-.png'),
  's-': require('./assets/images/Artikli/s-.png'),
  't-': require('./assets/images/Artikli/t-.png'),
  'tal-': require('./assets/images/Artikli/tal-.png'),
  // Emozzjonijiet
  'e%C4%8Bitat': require('./assets/images/Emozzjonijiet/e%C4%8Bitat.png'),
  'e%C4%8Bitata': require('./assets/images/Emozzjonijiet/e%C4%8Bitata.png'),
  'e%C4%8Bitati': require('./assets/images/Emozzjonijiet/e%C4%8Bitati.png'),
  'fer%C4%A7an': require('./assets/images/Emozzjonijiet/fer%C4%A7an.png'),
  'fer%C4%A7ana': require('./assets/images/Emozzjonijiet/fer%C4%A7ana.png'),
  'fer%C4%A7anin': require('./assets/images/Emozzjonijiet/fer%C4%A7anin.png'),
  'imdejqin': require('./assets/images/Emozzjonijiet/imdejqin.png'),
  'irrabjati': require('./assets/images/Emozzjonijiet/irrabjati.png'),
  'mdejjaq': require('./assets/images/Emozzjonijiet/mdejjaq.png'),
  'mdejqa': require('./assets/images/Emozzjonijiet/mdejqa.png'),
  'mdejqin': require('./assets/images/Emozzjonijiet/mdejqin.png'),
  'nervu%C5%BC': require('./assets/images/Emozzjonijiet/nervu%C5%BC.png'),
  'nervu%C5%BCa': require('./assets/images/Emozzjonijiet/nervu%C5%BCa.png'),
  'nervu%C5%BCi': require('./assets/images/Emozzjonijiet/nervu%C5%BCi.png'),
  'rrabjat': require('./assets/images/Emozzjonijiet/rrabjat.png'),
  'rrabjata': require('./assets/images/Emozzjonijiet/rrabjata.png'),
  'rrabjati': require('./assets/images/Emozzjonijiet/rrabjati.png'),
  // %C4%A0enerali
  'bard': require('./assets/images/%C4%A0enerali/bard.png'),
  'bi%C4%8B%C4%8Ba': require('./assets/images/%C4%A0enerali/bi%C4%8B%C4%8Ba.png'),
  'bon%C4%A1u': require('./assets/images/%C4%A0enerali/bon%C4%A1u.png'),
  'bye': require('./assets/images/%C4%A0enerali/bye.png'),
  'ftit': require('./assets/images/%C4%A0enerali/ftit.png'),
  'grazzi': require('./assets/images/%C4%A0enerali/grazzi.png'),
  'iva': require('./assets/images/%C4%A0enerali/iva.png'),
  'le': require('./assets/images/%C4%A0enerali/le.png'),
  'ma': require('./assets/images/%C4%A0enerali/ma.png'),
  'par': require('./assets/images/%C4%A0enerali/par.png'),
  'qed': require('./assets/images/%C4%A0enerali/qed.png'),
  'sku%C5%BCi': require('./assets/images/%C4%A0enerali/sku%C5%BCi.png'),
  's%C4%A7ana': require('./assets/images/%C4%A0enerali/s%C4%A7ana.png'),
  'u': require('./assets/images/%C4%A0enerali/u.png'),
  '%C4%8Baw': require('./assets/images/%C4%A0enerali/%C4%8Baw.png'),
  '%C4%A7ello': require('./assets/images/%C4%A0enerali/%C4%A7ello.png'),
  // %C4%A0isem
  'dahar': require('./assets/images/%C4%A0isem/dahar.png'),
  'daharha': require('./assets/images/%C4%A0isem/daharha.png'),
  'daharhom': require('./assets/images/%C4%A0isem/daharhom.png'),
  'daharkom': require('./assets/images/%C4%A0isem/daharkom.png'),
  'daharna': require('./assets/images/%C4%A0isem/daharna.png'),
  'dahrek': require('./assets/images/%C4%A0isem/dahrek.png'),
  'dahri': require('./assets/images/%C4%A0isem/dahri.png'),
  'dahru': require('./assets/images/%C4%A0isem/dahru.png'),
  'g%C4%A7onq': require('./assets/images/%C4%A0isem/g%C4%A7onq.png'),
  'g%C4%A7onqha': require('./assets/images/%C4%A0isem/g%C4%A7onqha.png'),
  'g%C4%A7onqhom': require('./assets/images/%C4%A0isem/g%C4%A7onqhom.png'),
  'g%C4%A7onqi': require('./assets/images/%C4%A0isem/g%C4%A7onqi.png'),
  'g%C4%A7onqkom': require('./assets/images/%C4%A0isem/g%C4%A7onqkom.png'),
  'g%C4%A7onqna': require('./assets/images/%C4%A0isem/g%C4%A7onqna.png'),
  'g%C4%A7onqok': require('./assets/images/%C4%A0isem/g%C4%A7onqok.png'),
  'g%C4%A7onqu': require('./assets/images/%C4%A0isem/g%C4%A7onqu.png'),
  'id': require('./assets/images/%C4%A0isem/id.png'),
  'idejh': require('./assets/images/%C4%A0isem/idejh.png'),
  'idejha': require('./assets/images/%C4%A0isem/idejha.png'),
  'idejhom': require('./assets/images/%C4%A0isem/idejhom.png'),
  'idejja': require('./assets/images/%C4%A0isem/idejja.png'),
  'idejk': require('./assets/images/%C4%A0isem/idejk.png'),
  'idejkom': require('./assets/images/%C4%A0isem/idejkom.png'),
  'idejn': require('./assets/images/%C4%A0isem/idejn.png'),
  'idejna': require('./assets/images/%C4%A0isem/idejna.png'),
  'idek': require('./assets/images/%C4%A0isem/idek.png'),
  'idha': require('./assets/images/%C4%A0isem/idha.png'),
  'idhom': require('./assets/images/%C4%A0isem/idhom.png'),
  'idi': require('./assets/images/%C4%A0isem/idi.png'),
  'idkom': require('./assets/images/%C4%A0isem/idkom.png'),
  'idna': require('./assets/images/%C4%A0isem/idna.png'),
  'idu': require('./assets/images/%C4%A0isem/idu.png'),
  'ras': require('./assets/images/%C4%A0isem/ras.png'),
  'rasek': require('./assets/images/%C4%A0isem/rasek.png'),
  'rasha': require('./assets/images/%C4%A0isem/rasha.png'),
  'rashom': require('./assets/images/%C4%A0isem/rashom.png'),
  'rasi': require('./assets/images/%C4%A0isem/rasi.png'),
  'raskom': require('./assets/images/%C4%A0isem/raskom.png'),
  'rasna': require('./assets/images/%C4%A0isem/rasna.png'),
  'rasu': require('./assets/images/%C4%A0isem/rasu.png'),
  'saqajh': require('./assets/images/%C4%A0isem/saqajh.png'),
  'saqajha': require('./assets/images/%C4%A0isem/saqajha.png'),
  'saqajhom': require('./assets/images/%C4%A0isem/saqajhom.png'),
  'saqajja': require('./assets/images/%C4%A0isem/saqajja.png'),
  'saqajk': require('./assets/images/%C4%A0isem/saqajk.png'),
  'saqajkom': require('./assets/images/%C4%A0isem/saqajkom.png'),
  'saqajn': require('./assets/images/%C4%A0isem/saqajn.png'),
  'saqajna': require('./assets/images/%C4%A0isem/saqajna.png'),
  'sieq': require('./assets/images/%C4%A0isem/sieq.png'),
  'sieqek': require('./assets/images/%C4%A0isem/sieqek.png'),
  'sieqha': require('./assets/images/%C4%A0isem/sieqha.png'),
  'sieqhom': require('./assets/images/%C4%A0isem/sieqhom.png'),
  'sieqi': require('./assets/images/%C4%A0isem/sieqi.png'),
  'sieqkom': require('./assets/images/%C4%A0isem/sieqkom.png'),
  'sieqna': require('./assets/images/%C4%A0isem/sieqna.png'),
  'siequ': require('./assets/images/%C4%A0isem/siequ.png'),
  'sinna': require('./assets/images/%C4%A0isem/sinna.png'),
  '%C5%BCaqq': require('./assets/images/%C4%A0isem/%C5%BCaqq.png'),
  '%C5%BCaqqek': require('./assets/images/%C4%A0isem/%C5%BCaqqek.png'),
  '%C5%BCaqqha': require('./assets/images/%C4%A0isem/%C5%BCaqqha.png'),
  '%C5%BCaqqhom': require('./assets/images/%C4%A0isem/%C5%BCaqqhom.png'),
  '%C5%BCaqqi': require('./assets/images/%C4%A0isem/%C5%BCaqqi.png'),
  '%C5%BCaqqkom': require('./assets/images/%C4%A0isem/%C5%BCaqqkom.png'),
  '%C5%BCaqqna': require('./assets/images/%C4%A0isem/%C5%BCaqqna.png'),
  '%C5%BCaqqu': require('./assets/images/%C4%A0isem/%C5%BCaqqu.png'),
  // %C4%A0ugarelli
  'ballun': require('./assets/images/%C4%A0ugarelli/ballun.png'),
  'karozza': require('./assets/images/%C4%A0ugarelli/karozza.png'),
  'karozzi': require('./assets/images/%C4%A0ugarelli/karozzi.png'),
  'kompjuter': require('./assets/images/%C4%A0ugarelli/kompjuter.png'),
  'kotba': require('./assets/images/%C4%A0ugarelli/kotba.png'),
  'ktieb': require('./assets/images/%C4%A0ugarelli/ktieb.png'),
  'laptop': require('./assets/images/%C4%A0ugarelli/laptop.png'),
  'mowbajl': require('./assets/images/%C4%A0ugarelli/mowbajl.png'),
  'pupa': require('./assets/images/%C4%A0ugarelli/pupa.png'),
  'pupi': require('./assets/images/%C4%A0ugarelli/pupi.png'),
  'rota': require('./assets/images/%C4%A0ugarelli/rota.png'),
  'tablet': require('./assets/images/%C4%A0ugarelli/tablet.png'),
  '%C4%A1ugarelli': require('./assets/images/%C4%A0ugarelli/%C4%A1ugarelli.png'),
  // %C4%A6wejje%C4%A1
  'beritta': require('./assets/images/%C4%A6wejje%C4%A1/beritta.png'),
  'brazzuletta': require('./assets/images/%C4%A6wejje%C4%A1/brazzuletta.png'),
  'buz': require('./assets/images/%C4%A6wejje%C4%A1/buz.png'),
  'dublett': require('./assets/images/%C4%A6wejje%C4%A1/dublett.png'),
  'fardal': require('./assets/images/%C4%A6wejje%C4%A1/fardal.png'),
  'flokk': require('./assets/images/%C4%A6wejje%C4%A1/flokk.png'),
  'ingravata': require('./assets/images/%C4%A6wejje%C4%A1/ingravata.png'),
  'ingwanta': require('./assets/images/%C4%A6wejje%C4%A1/ingwanta.png'),
  'ingwanti': require('./assets/images/%C4%A6wejje%C4%A1/ingwanti.png'),
  'kalzetta': require('./assets/images/%C4%A6wejje%C4%A1/kalzetta.png'),
  'kalzetti': require('./assets/images/%C4%A6wejje%C4%A1/kalzetti.png'),
  'kappell': require('./assets/images/%C4%A6wejje%C4%A1/kappell.png'),
  'karkur': require('./assets/images/%C4%A6wejje%C4%A1/karkur.png'),
  'karkura': require('./assets/images/%C4%A6wejje%C4%A1/karkura.png'),
  'kowt': require('./assets/images/%C4%A6wejje%C4%A1/kowt.png'),
  'libsa': require('./assets/images/%C4%A6wejje%C4%A1/libsa.png'),
  'malja': require('./assets/images/%C4%A6wejje%C4%A1/malja.png'),
  'nu%C4%8B%C4%8Bali': require('./assets/images/%C4%A6wejje%C4%A1/nu%C4%8B%C4%8Bali.png'),
  'papo%C4%8B%C4%8B': require('./assets/images/%C4%A6wejje%C4%A1/papo%C4%8B%C4%8B.png'),
  'papo%C4%8B%C4%8Ba': require('./assets/images/%C4%A6wejje%C4%A1/papo%C4%8B%C4%8Ba.png'),
  'pi%C4%A1ama': require('./assets/images/%C4%A6wejje%C4%A1/pi%C4%A1ama.png'),
  'qalziet': require('./assets/images/%C4%A6wejje%C4%A1/qalziet.png'),
  'qmis': require('./assets/images/%C4%A6wejje%C4%A1/qmis.png'),
  'sandli': require('./assets/images/%C4%A6wejje%C4%A1/sandli.png'),
  'sandlija': require('./assets/images/%C4%A6wejje%C4%A1/sandlija.png'),
  'uniformi': require('./assets/images/%C4%A6wejje%C4%A1/uniformi.png'),
  'xalla': require('./assets/images/%C4%A6wejje%C4%A1/xalla.png'),
  'xorts': require('./assets/images/%C4%A6wejje%C4%A1/xorts.png'),
  '%C4%8Binturin': require('./assets/images/%C4%A6wejje%C4%A1/%C4%8Binturin.png'),
  '%C4%8Boff': require('./assets/images/%C4%A6wejje%C4%A1/%C4%8Boff.png'),
  '%C4%8Burkett': require('./assets/images/%C4%A6wejje%C4%A1/%C4%8Burkett.png'),
  '%C4%A1akketta': require('./assets/images/%C4%A6wejje%C4%A1/%C4%A1akketta.png'),
  '%C4%A1ersi': require('./assets/images/%C4%A6wejje%C4%A1/%C4%A1ersi.png'),
  '%C4%A1ins': require('./assets/images/%C4%A6wejje%C4%A1/%C4%A1ins.png'),
  '%C4%A1i%C5%BCirana': require('./assets/images/%C4%A6wejje%C4%A1/%C4%A1i%C5%BCirana.png'),
  '%C5%BCarbun': require('./assets/images/%C4%A6wejje%C4%A1/%C5%BCarbun.png'),
  '%C5%BCarbuna': require('./assets/images/%C4%A6wejje%C4%A1/%C5%BCarbuna.png'),
  // Ikel
  'bajd': require('./assets/images/Ikel/bajd.png'),
  'bajda': require('./assets/images/Ikel/bajda.png'),
  'banana': require('./assets/images/Ikel/banana.png'),
  'bettie%C4%A7': require('./assets/images/Ikel/bettie%C4%A7.png'),
  'bettie%C4%A7a': require('./assets/images/Ikel/bettie%C4%A7a.png'),
  'butir': require('./assets/images/Ikel/butir.png'),
  'dullieg%C4%A7': require('./assets/images/Ikel/dullieg%C4%A7.png'),
  'dullieg%C4%A7a': require('./assets/images/Ikel/dullieg%C4%A7a.png'),
  'frawli': require('./assets/images/Ikel/frawli.png'),
  'frott': require('./assets/images/Ikel/frott.png'),
  'galletti': require('./assets/images/Ikel/galletti.png'),
  'gallettina': require('./assets/images/Ikel/gallettina.png'),
  'gallettini': require('./assets/images/Ikel/gallettini.png'),
  'g%C4%A7a%C4%A1in': require('./assets/images/Ikel/g%C4%A7a%C4%A1in.png'),
  'g%C4%A7eneb': require('./assets/images/Ikel/g%C4%A7eneb.png'),
  'hamburger': require('./assets/images/Ikel/hamburger.png'),
  'irkotta': require('./assets/images/Ikel/irkotta.png'),
  'kejk': require('./assets/images/Ikel/kejk.png'),
  'lan%C4%A1as': require('./assets/images/Ikel/lan%C4%A1as.png'),
  'lan%C4%A1asa': require('./assets/images/Ikel/lan%C4%A1asa.png'),
  'larin%C4%A1': require('./assets/images/Ikel/larin%C4%A1.png'),
  'larin%C4%A1a': require('./assets/images/Ikel/larin%C4%A1a.png'),
  'la%C4%A7am': require('./assets/images/Ikel/la%C4%A7am.png'),
  'mag%C4%A7sur': require('./assets/images/Ikel/mag%C4%A7sur.png'),
  'pastizz': require('./assets/images/Ikel/pastizz.png'),
  'pastizzi': require('./assets/images/Ikel/pastizzi.png'),
  'per%C5%BCut': require('./assets/images/Ikel/per%C5%BCut.png'),
  'pizza': require('./assets/images/Ikel/pizza.png'),
  'pi%C5%BCelli': require('./assets/images/Ikel/pi%C5%BCelli.png'),
  'platt': require('./assets/images/Ikel/platt.png'),
  'ross': require('./assets/images/Ikel/ross.png'),
  'skutella': require('./assets/images/Ikel/skutella.png'),
  'soppa': require('./assets/images/Ikel/soppa.png'),
  'spagetti': require('./assets/images/Ikel/spagetti.png'),
  'ti%C4%A1ie%C4%A1': require('./assets/images/Ikel/ti%C4%A1ie%C4%A1.png'),
  'ti%C4%A1ie%C4%A1a': require('./assets/images/Ikel/ti%C4%A1ie%C4%A1a.png'),
  'tuffie%C4%A7': require('./assets/images/Ikel/tuffie%C4%A7.png'),
  'tuffie%C4%A7a': require('./assets/images/Ikel/tuffie%C4%A7a.png'),
  'yogurt': require('./assets/images/Ikel/yogurt.png'),
  'zalza': require('./assets/images/Ikel/zalza.png'),
  '%C4%8Bereali': require('./assets/images/Ikel/%C4%8Bereali.png'),
  '%C4%8Bikkulata': require('./assets/images/Ikel/%C4%8Bikkulata.png'),
  '%C4%8Bikkulatini': require('./assets/images/Ikel/%C4%8Bikkulatini.png'),
  '%C4%A1elat': require('./assets/images/Ikel/%C4%A1elat.png'),
  '%C4%A1obon': require('./assets/images/Ikel/%C4%A1obon.png'),
  '%C4%A7aw%C4%A7': require('./assets/images/Ikel/%C4%A7aw%C4%A7.png'),
  '%C4%A7aw%C4%A7a': require('./assets/images/Ikel/%C4%A7aw%C4%A7a.png'),
  '%C4%A7elu': require('./assets/images/Ikel/%C4%A7elu.png'),
  '%C4%A7ob%C5%BC': require('./assets/images/Ikel/%C4%A7ob%C5%BC.png'),
  '%C4%A7ut': require('./assets/images/Ikel/%C4%A7ut.png'),
  '%C4%A7uta': require('./assets/images/Ikel/%C4%A7uta.png'),
  '%C5%BCejt': require('./assets/images/Ikel/%C5%BCejt.png'),
  // Kuluri
  'abjad': require('./assets/images/Kuluri/abjad.png'),
  'a%C4%A7dar': require('./assets/images/Kuluri/a%C4%A7dar.png'),
  'a%C4%A7mar': require('./assets/images/Kuluri/a%C4%A7mar.png'),
  'blu': require('./assets/images/Kuluri/blu.png'),
  'bluna': require('./assets/images/Kuluri/bluna.png'),
  'bluni': require('./assets/images/Kuluri/bluni.png'),
  'bojod': require('./assets/images/Kuluri/bojod.png'),
  'isfar': require('./assets/images/Kuluri/isfar.png'),
  'iswed': require('./assets/images/Kuluri/iswed.png'),
  'ro%C5%BCa': require('./assets/images/Kuluri/ro%C5%BCa.png'),
  'safra': require('./assets/images/Kuluri/safra.png'),
  'sewda': require('./assets/images/Kuluri/sewda.png'),
  'sofor': require('./assets/images/Kuluri/sofor.png'),
  'suwed': require('./assets/images/Kuluri/suwed.png'),
  'vjola': require('./assets/images/Kuluri/vjola.png'),
  '%C4%A7adra': require('./assets/images/Kuluri/%C4%A7adra.png'),
  '%C4%A7amra': require('./assets/images/Kuluri/%C4%A7amra.png'),
  '%C4%A7odor': require('./assets/images/Kuluri/%C4%A7odor.png'),
  '%C4%A7omor': require('./assets/images/Kuluri/%C4%A7omor.png'),
  // Numri
  '0': require('./assets/images/Numri/0.png'),
  '1': require('./assets/images/Numri/1.png'),
  '2': require('./assets/images/Numri/2.png'),
  '3': require('./assets/images/Numri/3.png'),
  '4': require('./assets/images/Numri/4.png'),
  '5': require('./assets/images/Numri/5.png'),
  '6': require('./assets/images/Numri/6.png'),
  '7': require('./assets/images/Numri/7.png'),
  '8': require('./assets/images/Numri/8.png'),
  '9': require('./assets/images/Numri/9.png'),
  // Pronomi
  'a%C4%A7na': require('./assets/images/Pronomi/a%C4%A7na.png'),
  'hi': require('./assets/images/Pronomi/hi.png'),
  'hu': require('./assets/images/Pronomi/hu.png'),
  'huma': require('./assets/images/Pronomi/huma.png'),
  'int': require('./assets/images/Pronomi/int.png'),
  'intom': require('./assets/images/Pronomi/intom.png'),
  'jien': require('./assets/images/Pronomi/jien.png'),
  // U%C4%A1ig%C4%A7
  'aller%C4%A1ija': require('./assets/images/U%C4%A1ig%C4%A7/aller%C4%A1ija.png'),
  'demm': require('./assets/images/U%C4%A1ig%C4%A7/demm.png'),
  'deni': require('./assets/images/U%C4%A1ig%C4%A7/deni.png'),
  'dijarea': require('./assets/images/U%C4%A1ig%C4%A7/dijarea.png'),
  'marid': require('./assets/images/U%C4%A1ig%C4%A7/marid.png'),
  'marida': require('./assets/images/U%C4%A1ig%C4%A7/marida.png'),
  'morda': require('./assets/images/U%C4%A1ig%C4%A7/morda.png'),
  'raxx': require('./assets/images/U%C4%A1ig%C4%A7/raxx.png'),
  'ri%C4%A7': require('./assets/images/U%C4%A1ig%C4%A7/ri%C4%A7.png'),
  'sog%C4%A7la': require('./assets/images/U%C4%A1ig%C4%A7/sog%C4%A7la.png'),
  // Verbi
  'g%C4%A7andek': require('./assets/images/Verbi/g%C4%A7andek.png'),
  'g%C4%A7andha': require('./assets/images/Verbi/g%C4%A7andha.png'),
  'g%C4%A7andhom': require('./assets/images/Verbi/g%C4%A7andhom.png'),
  'g%C4%A7andi': require('./assets/images/Verbi/g%C4%A7andi.png'),
  'g%C4%A7andkom': require('./assets/images/Verbi/g%C4%A7andkom.png'),
  'g%C4%A7andna': require('./assets/images/Verbi/g%C4%A7andna.png'),
  'g%C4%A7andu': require('./assets/images/Verbi/g%C4%A7andu.png'),
  'ieqaf': require('./assets/images/Verbi/ieqaf.png'),
  'immur': require('./assets/images/Verbi/immur.png'),
  'in%C4%A7obb': require('./assets/images/Verbi/in%C4%A7obb.png'),
  'in%C4%A7oss': require('./assets/images/Verbi/in%C4%A7oss.png'),
  'in%C4%A7ossni': require('./assets/images/Verbi/in%C4%A7ossni.png'),
  'in%C4%A7ossu': require('./assets/images/Verbi/in%C4%A7ossu.png'),
  'in%C4%A7ossuna': require('./assets/images/Verbi/in%C4%A7ossuna.png'),
  'irrid': require('./assets/images/Verbi/irrid.png'),
  'i%C4%A7oss': require('./assets/images/Verbi/i%C4%A7oss.png'),
  'i%C4%A7ossu': require('./assets/images/Verbi/i%C4%A7ossu.png'),
  'i%C4%A7ossuhom': require('./assets/images/Verbi/i%C4%A7ossuhom.png'),
  'jaf': require('./assets/images/Verbi/jaf.png'),
  'jafu': require('./assets/images/Verbi/jafu.png'),
  'jafux': require('./assets/images/Verbi/jafux.png'),
  'jafx': require('./assets/images/Verbi/jafx.png'),
  'jaqra': require('./assets/images/Verbi/jaqra.png'),
  'jaqraw': require('./assets/images/Verbi/jaqraw.png'),
  'jieklu': require('./assets/images/Verbi/jieklu.png'),
  'jiekol': require('./assets/images/Verbi/jiekol.png'),
  'jilag%C4%A7bu': require('./assets/images/Verbi/jilag%C4%A7bu.png'),
  'jilbes': require('./assets/images/Verbi/jilbes.png'),
  'jilbsu': require('./assets/images/Verbi/jilbsu.png'),
  'jilg%C4%A7ab': require('./assets/images/Verbi/jilg%C4%A7ab.png'),
  'jixorbu': require('./assets/images/Verbi/jixorbu.png'),
  'jixrob': require('./assets/images/Verbi/jixrob.png'),
  'jrid': require('./assets/images/Verbi/jrid.png'),
  'jridu': require('./assets/images/Verbi/jridu.png'),
  'jridux': require('./assets/images/Verbi/jridux.png'),
  'jridx': require('./assets/images/Verbi/jridx.png'),
  'ju%C4%A1ag%C4%A7ha': require('./assets/images/Verbi/ju%C4%A1ag%C4%A7ha.png'),
  'ju%C4%A1ag%C4%A7hom': require('./assets/images/Verbi/ju%C4%A1ag%C4%A7hom.png'),
  'ju%C4%A1ag%C4%A7kom': require('./assets/images/Verbi/ju%C4%A1ag%C4%A7kom.png'),
  'ju%C4%A1ag%C4%A7na': require('./assets/images/Verbi/ju%C4%A1ag%C4%A7na.png'),
  'ju%C4%A1ag%C4%A7ni': require('./assets/images/Verbi/ju%C4%A1ag%C4%A7ni.png'),
  'ju%C4%A1g%C4%A7ak': require('./assets/images/Verbi/ju%C4%A1g%C4%A7ak.png'),
  'ju%C4%A1g%C4%A7u': require('./assets/images/Verbi/ju%C4%A1g%C4%A7u.png'),
  'ju%C5%BCa': require('./assets/images/Verbi/ju%C5%BCa.png'),
  'ju%C5%BCaw': require('./assets/images/Verbi/ju%C5%BCaw.png'),
  'j%C4%A7obb': require('./assets/images/Verbi/j%C4%A7obb.png'),
  'j%C4%A7obbu': require('./assets/images/Verbi/j%C4%A7obbu.png'),
  'j%C4%A7obbux': require('./assets/images/Verbi/j%C4%A7obbux.png'),
  'j%C4%A7obbx': require('./assets/images/Verbi/j%C4%A7obbx.png'),
  'ma n%C4%A7obbx': require('./assets/images/Verbi/ma n%C4%A7obbx.png'),
  'ma rridx': require('./assets/images/Verbi/ma rridx.png'),
  'naf': require('./assets/images/Verbi/naf.png'),
  'nafu': require('./assets/images/Verbi/nafu.png'),
  'nafux': require('./assets/images/Verbi/nafux.png'),
  'nafx': require('./assets/images/Verbi/nafx.png'),
  'naqra': require('./assets/images/Verbi/naqra.png'),
  'naqraw': require('./assets/images/Verbi/naqraw.png'),
  'nieklu': require('./assets/images/Verbi/nieklu.png'),
  'niekol': require('./assets/images/Verbi/niekol.png'),
  'nilag%C4%A7bu': require('./assets/images/Verbi/nilag%C4%A7bu.png'),
  'nilbes': require('./assets/images/Verbi/nilbes.png'),
  'nilbsu': require('./assets/images/Verbi/nilbsu.png'),
  'nilg%C4%A7ab': require('./assets/images/Verbi/nilg%C4%A7ab.png'),
  'nixorbu': require('./assets/images/Verbi/nixorbu.png'),
  'nixrob': require('./assets/images/Verbi/nixrob.png'),
  'norqod': require('./assets/images/Verbi/norqod.png'),
  'nu%C5%BCa': require('./assets/images/Verbi/nu%C5%BCa.png'),
  'nu%C5%BCaw': require('./assets/images/Verbi/nu%C5%BCaw.png'),
  'n%C4%A7obbu': require('./assets/images/Verbi/n%C4%A7obbu.png'),
  'n%C4%A7obbux': require('./assets/images/Verbi/n%C4%A7obbux.png'),
  'n%C4%A7obbx': require('./assets/images/Verbi/n%C4%A7obbx.png'),
  'rridu': require('./assets/images/Verbi/rridu.png'),
  'rridux': require('./assets/images/Verbi/rridux.png'),
  'rridx': require('./assets/images/Verbi/rridx.png'),
  'stenna': require('./assets/images/Verbi/stenna.png'),
  'taf': require('./assets/images/Verbi/taf.png'),
  'tafu': require('./assets/images/Verbi/tafu.png'),
  'tafux': require('./assets/images/Verbi/tafux.png'),
  'tafx': require('./assets/images/Verbi/tafx.png'),
  'taqra': require('./assets/images/Verbi/taqra.png'),
  'taqraw': require('./assets/images/Verbi/taqraw.png'),
  'tieklu': require('./assets/images/Verbi/tieklu.png'),
  'tiekol': require('./assets/images/Verbi/tiekol.png'),
  'tilag%C4%A7bu': require('./assets/images/Verbi/tilag%C4%A7bu.png'),
  'tilbes': require('./assets/images/Verbi/tilbes.png'),
  'tilbsu': require('./assets/images/Verbi/tilbsu.png'),
  'tilg%C4%A7ab': require('./assets/images/Verbi/tilg%C4%A7ab.png'),
  'tixorbu': require('./assets/images/Verbi/tixorbu.png'),
  'tixrob': require('./assets/images/Verbi/tixrob.png'),
  'trid': require('./assets/images/Verbi/trid.png'),
  'tridu': require('./assets/images/Verbi/tridu.png'),
  'tridux': require('./assets/images/Verbi/tridux.png'),
  'tridx': require('./assets/images/Verbi/tridx.png'),
  'tu%C4%A1ag%C4%A7ha': require('./assets/images/Verbi/tu%C4%A1ag%C4%A7ha.png'),
  'tu%C4%A1ag%C4%A7hom': require('./assets/images/Verbi/tu%C4%A1ag%C4%A7hom.png'),
  'tu%C4%A1ag%C4%A7kom': require('./assets/images/Verbi/tu%C4%A1ag%C4%A7kom.png'),
  'tu%C4%A1ag%C4%A7na': require('./assets/images/Verbi/tu%C4%A1ag%C4%A7na.png'),
  'tu%C4%A1ag%C4%A7ni': require('./assets/images/Verbi/tu%C4%A1ag%C4%A7ni.png'),
  'tu%C4%A1g%C4%A7ak (1)': require('./assets/images/Verbi/tu%C4%A1g%C4%A7ak (1).png'),
  'tu%C4%A1g%C4%A7ak(1)': require('./assets/images/Verbi/tu%C4%A1g%C4%A7ak(1).png'),
  'tu%C4%A1g%C4%A7ak': require('./assets/images/Verbi/tu%C4%A1g%C4%A7ak.png'),
  'tu%C4%A1g%C4%A7u': require('./assets/images/Verbi/tu%C4%A1g%C4%A7u.png'),
  'tu%C5%BCa': require('./assets/images/Verbi/tu%C5%BCa.png'),
  'tu%C5%BCaw': require('./assets/images/Verbi/tu%C5%BCaw.png'),
  't%C4%A7obb': require('./assets/images/Verbi/t%C4%A7obb.png'),
  't%C4%A7obbu': require('./assets/images/Verbi/t%C4%A7obbu.png'),
  't%C4%A7obbux': require('./assets/images/Verbi/t%C4%A7obbux.png'),
  't%C4%A7obbx': require('./assets/images/Verbi/t%C4%A7obbx.png'),
  't%C4%A7oss': require('./assets/images/Verbi/t%C4%A7oss.png'),
  't%C4%A7ossha': require('./assets/images/Verbi/t%C4%A7ossha.png'),
  't%C4%A7ossok': require('./assets/images/Verbi/t%C4%A7ossok.png'),
  't%C4%A7ossu': require('./assets/images/Verbi/t%C4%A7ossu.png'),
  't%C4%A7ossukom': require('./assets/images/Verbi/t%C4%A7ossukom.png'),
  // Xorb
  'flixkun': require('./assets/images/Xorb/flixkun.png'),
  'ilma': require('./assets/images/Xorb/ilma.png'),
  'kafe`': require('./assets/images/Xorb/kafe`.png'),
  'kikkra': require('./assets/images/Xorb/kikkra.png'),
  'luminata': require('./assets/images/Xorb/luminata.png'),
  'tazza': require('./assets/images/Xorb/tazza.png'),
  'te`': require('./assets/images/Xorb/te`.png'),
  '%C4%A7alib': require('./assets/images/Xorb/%C4%A7alib.png'),
};

export default assetMap;