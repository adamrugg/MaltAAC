// function decodedRequire(encodedPath) {
//   const decodedPath = encodedPath.replace(/(%[0-9A-Fa-f]{2})+/g, (match) => {
//     return decodeURIComponent(match);
//   });
//   return require(decodedPath);
// }

const assetMap = {
    // Alfabett
    'A': require('./assets/images/Alfabett/A.png'),
    'B': require('./assets/images/Alfabett/B.png'),
    'D': require('./assets/images/Alfabett/D.png'),
    'E': require('./assets/images/Alfabett/E.png'),
    'F': require('./assets/images/Alfabett/F.png'),
    'G': require('./assets/images/Alfabett/G.png'),
    'GĦ': require('./assets/images/Alfabett/Ġ.png'),
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
    'Ċ': require('./assets/images/Alfabett/Ċ.png'),
    'Ġ': require('./assets/images/Alfabett/Ġ.png'),
    'Ħ': require('./assets/images/Alfabett/Ħ.png'),
    'Ż': require('./assets/images/Alfabett/Ż.png'),
    // Artikli
    'bil-': require('./assets/images/Artikli/bil-.png'),
    'bir-': require('./assets/images/Artikli/bir-.png'),
    'bit-': require('./assets/images/Artikli/bit-.png'),
    'biz-': require('./assets/images/Artikli/biz-.png'),
    'biż-': require('./assets/images/Artikli/biż-.png'),
    'd-': require('./assets/images/Artikli/d-.png'),
    'f\'': require('./assets/images/Artikli/f\'.png'),
    'id\-': require('./assets/images/Artikli/id-.png'),
    'il-': require('./assets/images/Artikli/il-.png'),
    'in-': require('./assets/images/Artikli/in-.png'),
    'ir-': require('./assets/images/Artikli/ir-.png'),
    'is-': require('./assets/images/Artikli/is-.png'),
    'it-': require('./assets/images/Artikli/it-.png'),
    'ix-': require('./assets/images/Artikli/ix-.png'),
    'iċ-': require('./assets/images/Artikli/iċ-.png'),
    'iż-': require('./assets/images/Artikli/iż-.png'),
    'l-': require('./assets/images/Artikli/l-.png'),
    'r-': require('./assets/images/Artikli/r-.png'),
    's-': require('./assets/images/Artikli/s-.png'),
    't-': require('./assets/images/Artikli/t-.png'),
    'tal-': require('./assets/images/Artikli/tal-.png'),
    // Emozzjonijiet
    'eċitat': require('./assets/images/Emozzjonijiet/eċitat.png'),
    'eċitata': require('./assets/images/Emozzjonijiet/eċitata.png'),
    'eċitati': require('./assets/images/Emozzjonijiet/eċitati.png'),
    'ferħan': require('./assets/images/Emozzjonijiet/ferħan.png'),
    'ferħana': require('./assets/images/Emozzjonijiet/ferħana.png'),
    'ferħanin': require('./assets/images/Emozzjonijiet/ferħanin.png'),
    'imdejqin': require('./assets/images/Emozzjonijiet/imdejqin.png'),
    'irrabjati': require('./assets/images/Emozzjonijiet/irrabjati.png'),
    'mdejjaq': require('./assets/images/Emozzjonijiet/mdejjaq.png'),
    'mdejqa': require('./assets/images/Emozzjonijiet/mdejqa.png'),
    'mdejqin': require('./assets/images/Emozzjonijiet/mdejqin.png'),
    'nervuż': require('./assets/images/Emozzjonijiet/nervuż.png'),
    'nervuża': require('./assets/images/Emozzjonijiet/nervuża.png'),
    'nervużi': require('./assets/images/Emozzjonijiet/nervużi.png'),
    'rrabjat': require('./assets/images/Emozzjonijiet/rrabjat.png'),
    'rrabjata': require('./assets/images/Emozzjonijiet/rrabjata.png'),
    'rrabjati': require('./assets/images/Emozzjonijiet/rrabjati.png'),
    // Ġenerali
    'bard': require('./assets/images/Ġenerali/bard.png'),
    'biċċa': require('./assets/images/Ġenerali/bi%C4%8B%C4%8Ba.png'),
    'bonġu': require('./assets/images/Ġenerali/bon%C4%A1u.png'),
    'bye': require('./assets/images/Ġenerali/bye.png'),
    'ftit': require('./assets/images/Ġenerali/ftit.png'),
    'grazzi': require('./assets/images/Ġenerali/grazzi.png'),
    'iva': require('./assets/images/Ġenerali/iva.png'),
    'le': require('./assets/images/Ġenerali/le.png'),
    'ma': require('./assets/images/Ġenerali/ma.png'),
    'par': require('./assets/images/Ġenerali/par.png'),
    'qed': require('./assets/images/Ġenerali/qed.png'),
    'skużi': require('./assets/images/Ġenerali/sku%C5%BCi.png'),
    'sħana': require('./assets/images/Ġenerali/s%C4%A7ana.png'),
    'u': require('./assets/images/Ġenerali/u.png'),
    'ċaw': require('./assets/images/Ġenerali/%C4%8Baw.png'),
    'ħello': require('./assets/images/Ġenerali/%C4%A7ello.png'),
    // Ġisem
    'dahar': require('./assets/images/Ġisem/dahar.png'),
    'daharha': require('./assets/images/Ġisem/daharha.png'),
    'daharhom': require('./assets/images/Ġisem/daharhom.png'),
    'daharkom': require('./assets/images/Ġisem/daharkom.png'),
    'daharna': require('./assets/images/Ġisem/daharna.png'),
    'dahrek': require('./assets/images/Ġisem/dahrek.png'),
    'dahri': require('./assets/images/Ġisem/dahri.png'),
    'dahru': require('./assets/images/Ġisem/dahru.png'),
    'għonq': require('./assets/images/Ġisem/g%C4%A7onq.png'),
    'għonqha': require('./assets/images/Ġisem/g%C4%A7onqha.png'),
    'għonqhom': require('./assets/images/Ġisem/g%C4%A7onqhom.png'),
    'għonqi': require('./assets/images/Ġisem/g%C4%A7onqi.png'),
    'għonqkom': require('./assets/images/Ġisem/g%C4%A7onqkom.png'),
    'għonqna': require('./assets/images/Ġisem/g%C4%A7onqna.png'),
    'għonqok': require('./assets/images/Ġisem/g%C4%A7onqok.png'),
    'għonqu': require('./assets/images/Ġisem/g%C4%A7onqu.png'),
    'id': require('./assets/images/Ġisem/id.png'),
    'idejh': require('./assets/images/Ġisem/idejh.png'),
    'idejha': require('./assets/images/Ġisem/idejha.png'),
    'idejhom': require('./assets/images/Ġisem/idejhom.png'),
    'idejja': require('./assets/images/Ġisem/idejja.png'),
    'idejk': require('./assets/images/Ġisem/idejk.png'),
    'idejkom': require('./assets/images/Ġisem/idejkom.png'),
    'idejn': require('./assets/images/Ġisem/idejn.png'),
    'idejna': require('./assets/images/Ġisem/idejna.png'),
    'idek': require('./assets/images/Ġisem/idek.png'),
    'idha': require('./assets/images/Ġisem/idha.png'),
    'idhom': require('./assets/images/Ġisem/idhom.png'),
    'idi': require('./assets/images/Ġisem/idi.png'),
    'idkom': require('./assets/images/Ġisem/idkom.png'),
    'idna': require('./assets/images/Ġisem/idna.png'),
    'idu': require('./assets/images/Ġisem/idu.png'),
    'ras': require('./assets/images/Ġisem/ras.png'),
    'rasek': require('./assets/images/Ġisem/rasek.png'),
    'rasha': require('./assets/images/Ġisem/rasha.png'),
    'rashom': require('./assets/images/Ġisem/rashom.png'),
    'rasi': require('./assets/images/Ġisem/rasi.png'),
    'raskom': require('./assets/images/Ġisem/raskom.png'),
    'rasna': require('./assets/images/Ġisem/rasna.png'),
    'rasu': require('./assets/images/Ġisem/rasu.png'),
    'saqajh': require('./assets/images/Ġisem/saqajh.png'),
    'saqajha': require('./assets/images/Ġisem/saqajha.png'),
    'saqajhom': require('./assets/images/Ġisem/saqajhom.png'),
    'saqajja': require('./assets/images/Ġisem/saqajja.png'),
    'saqajk': require('./assets/images/Ġisem/saqajk.png'),
    'saqajkom': require('./assets/images/Ġisem/saqajkom.png'),
    'saqajn': require('./assets/images/Ġisem/saqajn.png'),
    'saqajna': require('./assets/images/Ġisem/saqajna.png'),
    'sieq': require('./assets/images/Ġisem/sieq.png'),
    'sieqek': require('./assets/images/Ġisem/sieqek.png'),
    'sieqha': require('./assets/images/Ġisem/sieqha.png'),
    'sieqhom': require('./assets/images/Ġisem/sieqhom.png'),
    'sieqi': require('./assets/images/Ġisem/sieqi.png'),
    'sieqkom': require('./assets/images/Ġisem/sieqkom.png'),
    'sieqna': require('./assets/images/Ġisem/sieqna.png'),
    'siequ': require('./assets/images/Ġisem/siequ.png'),
    'sinna': require('./assets/images/Ġisem/sinna.png'),
    'żaqq': require('./assets/images/Ġisem/%C5%BCaqq.png'),
    'żaqqek': require('./assets/images/Ġisem/%C5%BCaqqek.png'),
    'żaqqha': require('./assets/images/Ġisem/%C5%BCaqqha.png'),
    'żaqqhom': require('./assets/images/Ġisem/%C5%BCaqqhom.png'),
    'żaqqi': require('./assets/images/Ġisem/%C5%BCaqqi.png'),
    'żaqqkom': require('./assets/images/Ġisem/%C5%BCaqqkom.png'),
    'żaqqna': require('./assets/images/Ġisem/%C5%BCaqqna.png'),
    'żaqqu': require('./assets/images/Ġisem/%C5%BCaqqu.png'),
    // Ġugarelli
    'ballun': require('./assets/images/Ġugarelli/ballun.png'),
    'karozza': require('./assets/images/Ġugarelli/karozza.png'),
    'karozzi': require('./assets/images/Ġugarelli/karozzi.png'),
    'kompjuter': require('./assets/images/Ġugarelli/kompjuter.png'),
    'kotba': require('./assets/images/Ġugarelli/kotba.png'),
    'ktieb': require('./assets/images/Ġugarelli/ktieb.png'),
    'laptop': require('./assets/images/Ġugarelli/laptop.png'),
    'mowbajl': require('./assets/images/Ġugarelli/mowbajl.png'),
    'pupa': require('./assets/images/Ġugarelli/pupa.png'),
    'pupi': require('./assets/images/Ġugarelli/pupi.png'),
    'rota': require('./assets/images/Ġugarelli/rota.png'),
    'tablet': require('./assets/images/Ġugarelli/tablet.png'),
    'ġugarelli': require('./assets/images/Ġugarelli/%C4%A1ugarelli.png'),
    // Ħwejjeġ
    'beritta': require('./assets/images/Ħwejjeġ/beritta.png'),
    'brazzuletta': require('./assets/images/Ħwejjeġ/brazzuletta.png'),
    'buz': require('./assets/images/Ħwejjeġ/buz.png'),
    'dublett': require('./assets/images/Ħwejjeġ/dublett.png'),
    'fardal': require('./assets/images/Ħwejjeġ/fardal.png'),
    'flokk': require('./assets/images/Ħwejjeġ/flokk.png'),
    'ingravata': require('./assets/images/Ħwejjeġ/ingravata.png'),
    'ingwanta': require('./assets/images/Ħwejjeġ/ingwanta.png'),
    'ingwanti': require('./assets/images/Ħwejjeġ/ingwanti.png'),
    'kalzetta': require('./assets/images/Ħwejjeġ/kalzetta.png'),
    'kalzetti': require('./assets/images/Ħwejjeġ/kalzetti.png'),
    'kappell': require('./assets/images/Ħwejjeġ/kappell.png'),
    'karkur': require('./assets/images/Ħwejjeġ/karkur.png'),
    'karkura': require('./assets/images/Ħwejjeġ/karkura.png'),
    'kowt': require('./assets/images/Ħwejjeġ/kowt.png'),
    'libsa': require('./assets/images/Ħwejjeġ/libsa.png'),
    'malja': require('./assets/images/Ħwejjeġ/malja.png'),
    'nuċċali': require('./assets/images/Ħwejjeġ/nu%C4%8B%C4%8Bali.png'),
    'papoċċ': require('./assets/images/Ħwejjeġ/papo%C4%8B%C4%8B.png'),
    'papoċċa': require('./assets/images/Ħwejjeġ/papo%C4%8B%C4%8Ba.png'),
    'piġama': require('./assets/images/Ħwejjeġ/pi%C4%A1ama.png'),
    'qalziet': require('./assets/images/Ħwejjeġ/qalziet.png'),
    'qmis': require('./assets/images/Ħwejjeġ/qmis.png'),
    'sandli': require('./assets/images/Ħwejjeġ/sandli.png'),
    'sandlija': require('./assets/images/Ħwejjeġ/sandlija.png'),
    'uniformi': require('./assets/images/Ħwejjeġ/uniformi.png'),
    'xalla': require('./assets/images/Ħwejjeġ/xalla.png'),
    'xorts': require('./assets/images/Ħwejjeġ/xorts.png'),
    'ċinturin': require('./assets/images/Ħwejjeġ/%C4%8Binturin.png'),
    'ċoff': require('./assets/images/Ħwejjeġ/%C4%8Boff.png'),
    'ċurkett': require('./assets/images/Ħwejjeġ/%C4%8Burkett.png'),
    'ġakketta': require('./assets/images/Ħwejjeġ/%C4%A1akketta.png'),
    'ġersi': require('./assets/images/Ħwejjeġ/%C4%A1ersi.png'),
    'ġins': require('./assets/images/Ħwejjeġ/%C4%A1ins.png'),
    'ġiżirana': require('./assets/images/Ħwejjeġ/%C4%A1i%C5%BCirana.png'),
    'żarbun': require('./assets/images/Ħwejjeġ/%C5%BCarbun.png'),
    'żarbuna': require('./assets/images/Ħwejjeġ/%C5%BCarbuna.png'),
    // Ikel
    'bajd': require('./assets/images/Ikel/bajd.png'),
    'bajda': require('./assets/images/Ikel/bajda.png'),
    'banana': require('./assets/images/Ikel/banana.png'),
    'bettieħ': require('./assets/images/Ikel/bettieħ.png'),
    'bettieħa': require('./assets/images/Ikel/bettieħa.png'),
    'butir': require('./assets/images/Ikel/butir.png'),
    'dulliegħ': require('./assets/images/Ikel/dulliegħ.png'),
    'dulliegħa': require('./assets/images/Ikel/dulliegħa.png'),
    'frawli': require('./assets/images/Ikel/frawli.png'),
    'frott': require('./assets/images/Ikel/frott.png'),
    'galletti': require('./assets/images/Ikel/galletti.png'),
    'gallettina': require('./assets/images/Ikel/gallettina.png'),
    'gallettini': require('./assets/images/Ikel/gallettini.png'),
    'għaġin': require('./assets/images/Ikel/għaġin.png'),
    'għeneb': require('./assets/images/Ikel/għeneb.png'),
    'hamburger': require('./assets/images/Ikel/hamburger.png'),
    'irkotta': require('./assets/images/Ikel/irkotta.png'),
    'kejk': require('./assets/images/Ikel/kejk.png'),
    'lanġas': require('./assets/images/Ikel/lanġas.png'),
    'lanġasa': require('./assets/images/Ikel/lanġasa.png'),
    'larinġ': require('./assets/images/Ikel/larinġ.png'),
    'larinġa': require('./assets/images/Ikel/larinġa.png'),
    'laħam': require('./assets/images/Ikel/laħam.png'),
    'magħsur': require('./assets/images/Ikel/magħsur.png'),
    'pastizz': require('./assets/images/Ikel/pastizz.png'),
    'pastizzi': require('./assets/images/Ikel/pastizzi.png'),
    'perżut': require('./assets/images/Ikel/perżut.png'),
    'pizza': require('./assets/images/Ikel/pizza.png'),
    'piżelli': require('./assets/images/Ikel/piżelli.png'),
    'platt': require('./assets/images/Ikel/platt.png'),
    'ross': require('./assets/images/Ikel/ross.png'),
    'skutella': require('./assets/images/Ikel/skutella.png'),
    'soppa': require('./assets/images/Ikel/soppa.png'),
    'spagetti': require('./assets/images/Ikel/spagetti.png'),
    'tiġieġ': require('./assets/images/Ikel/tiġieġ.png'),
    'tiġieġa': require('./assets/images/Ikel/tiġieġa.png'),
    'tuffieħ': require('./assets/images/Ikel/tuffieħ.png'),
    'tuffieħa': require('./assets/images/Ikel/tuffieħa.png'),
    'yogurt': require('./assets/images/Ikel/yogurt.png'),
    'zalza': require('./assets/images/Ikel/zalza.png'),
    'ċereali': require('./assets/images/Ikel/ċereali.png'),
    'ċikkulata': require('./assets/images/Ikel/ċikkulata.png'),
    'ċikkulatini': require('./assets/images/Ikel/ċikkulatini.png'),
    'ġelat': require('./assets/images/Ikel/ġelat.png'),
    'ġobon': require('./assets/images/Ikel/ġobon.png'),
    'ħawħ': require('./assets/images/Ikel/ħawħ.png'),
    'ħawħa': require('./assets/images/Ikel/ħawħa.png'),
    'ħelu': require('./assets/images/Ikel/ħelu.png'),
    'ħobż': require('./assets/images/Ikel/ħobż.png'),
    'ħut': require('./assets/images/Ikel/ħut.png'),
    'ħuta': require('./assets/images/Ikel/ħuta.png'),
    'żejt': require('./assets/images/Ikel/żejt.png'),
    // Kuluri
    'abjad': require('./assets/images/Kuluri/abjad.png'),
    'aħdar': require('./assets/images/Kuluri/aħdar.png'),
    'aħmar': require('./assets/images/Kuluri/aħmar.png'),
    'blu': require('./assets/images/Kuluri/blu.png'),
    'bluna': require('./assets/images/Kuluri/bluna.png'),
    'bluni': require('./assets/images/Kuluri/bluni.png'),
    'bojod': require('./assets/images/Kuluri/bojod.png'),
    'isfar': require('./assets/images/Kuluri/isfar.png'),
    'iswed': require('./assets/images/Kuluri/iswed.png'),
    'roża': require('./assets/images/Kuluri/roża.png'),
    'safra': require('./assets/images/Kuluri/safra.png'),
    'sewda': require('./assets/images/Kuluri/sewda.png'),
    'sofor': require('./assets/images/Kuluri/sofor.png'),
    'suwed': require('./assets/images/Kuluri/suwed.png'),
    'vjola': require('./assets/images/Kuluri/vjola.png'),
    'ħadra': require('./assets/images/Kuluri/ħadra.png'),
    'ħamra': require('./assets/images/Kuluri/ħamra.png'),
    'ħodor': require('./assets/images/Kuluri/ħodor.png'),
    'ħomor': require('./assets/images/Kuluri/ħomor.png'),
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
    'aħna': require('./assets/images/Pronomi/aħna.png'),
    'hi': require('./assets/images/Pronomi/hi.png'),
    'hu': require('./assets/images/Pronomi/hu.png'),
    'huma': require('./assets/images/Pronomi/huma.png'),
    'int': require('./assets/images/Pronomi/int.png'),
    'intom': require('./assets/images/Pronomi/intom.png'),
    'jien': require('./assets/images/Pronomi/jien.png'),
    // Uġigħ
    'allerġija': require('./assets/images/Uġigħ/aller%C4%A1ija.png'),
    'demm': require('./assets/images/Uġigħ/demm.png'),
    'deni': require('./assets/images/Uġigħ/deni.png'),
    'dijarea': require('./assets/images/Uġigħ/dijarea.png'),
    'marid': require('./assets/images/Uġigħ/marid.png'),
    'marida': require('./assets/images/Uġigħ/marida.png'),
    'morda': require('./assets/images/Uġigħ/morda.png'),
    'raxx': require('./assets/images/Uġigħ/raxx.png'),
    'riħ': require('./assets/images/Uġigħ/ri%C4%A7.png'),
    'sogħla': require('./assets/images/Uġigħ/sog%C4%A7la.png'),
    // Verbi
    'għandek': require('./assets/images/Verbi/għandek.png'),
    'għandha': require('./assets/images/Verbi/għandha.png'),
    'għandhom': require('./assets/images/Verbi/għandhom.png'),
    'għandi': require('./assets/images/Verbi/għandi.png'),
    'għandkom': require('./assets/images/Verbi/għandkom.png'),
    'għandna': require('./assets/images/Verbi/għandna.png'),
    'għandu': require('./assets/images/Verbi/għandu.png'),
    'ieqaf': require('./assets/images/Verbi/ieqaf.png'),
    'immur': require('./assets/images/Verbi/immur.png'),
    'inħobb': require('./assets/images/Verbi/inħobb.png'),
    'inħoss': require('./assets/images/Verbi/inħoss.png'),
    'inħossni': require('./assets/images/Verbi/inħossni.png'),
    'inħossu': require('./assets/images/Verbi/inħossu.png'),
    'inħossuna': require('./assets/images/Verbi/inħossuna.png'),
    'irrid': require('./assets/images/Verbi/irrid.png'),
    'iħoss': require('./assets/images/Verbi/iħoss.png'),
    'iħossu': require('./assets/images/Verbi/iħossu.png'),
    'iħossuhom': require('./assets/images/Verbi/iħossuhom.png'),
    'jaf': require('./assets/images/Verbi/jaf.png'),
    'jafu': require('./assets/images/Verbi/jafu.png'),
    'jafux': require('./assets/images/Verbi/jafux.png'),
    'jafx': require('./assets/images/Verbi/jafx.png'),
    'jaqra': require('./assets/images/Verbi/jaqra.png'),
    'jaqraw': require('./assets/images/Verbi/jaqraw.png'),
    'jieklu': require('./assets/images/Verbi/jieklu.png'),
    'jiekol': require('./assets/images/Verbi/jiekol.png'),
    'jilagħbu': require('./assets/images/Verbi/jilagħbu.png'),
    'jilbes': require('./assets/images/Verbi/jilbes.png'),
    'jilbsu': require('./assets/images/Verbi/jilbsu.png'),
    'jilgħab': require('./assets/images/Verbi/jilgħab.png'),
    'jixorbu': require('./assets/images/Verbi/jixorbu.png'),
    'jixrob': require('./assets/images/Verbi/jixrob.png'),
    'jrid': require('./assets/images/Verbi/jrid.png'),
    'jridu': require('./assets/images/Verbi/jridu.png'),
    'jridux': require('./assets/images/Verbi/jridux.png'),
    'jridx': require('./assets/images/Verbi/jridx.png'),
    'juġagħha': require('./assets/images/Verbi/juġagħha.png'),
    'juġagħhom': require('./assets/images/Verbi/juġagħhom.png'),
    'juġagħkom': require('./assets/images/Verbi/juġagħkom.png'),
    'juġagħna': require('./assets/images/Verbi/juġagħna.png'),
    'juġagħni': require('./assets/images/Verbi/juġagħni.png'),
    'juġgħak': require('./assets/images/Verbi/juġgħak.png'),
    'juġgħu': require('./assets/images/Verbi/juġgħu.png'),
    'juża': require('./assets/images/Verbi/juża.png'),
    'jużaw': require('./assets/images/Verbi/jużaw.png'),
    'jħobb': require('./assets/images/Verbi/jħobb.png'),
    'jħobbu': require('./assets/images/Verbi/jħobbu.png'),
    'jħobbux': require('./assets/images/Verbi/jħobbux.png'),
    'jħobbx': require('./assets/images/Verbi/jħobbx.png'),
    'ma nħobbx': require('./assets/images/Verbi/ma nħobbx.png'),
    'ma rridx': require('./assets/images/Verbi/ma rridx.png'),
    'naf': require('./assets/images/Verbi/naf.png'),
    'nafu': require('./assets/images/Verbi/nafu.png'),
    'nafux': require('./assets/images/Verbi/nafux.png'),
    'nafx': require('./assets/images/Verbi/nafx.png'),
    'naqra': require('./assets/images/Verbi/naqra.png'),
    'naqraw': require('./assets/images/Verbi/naqraw.png'),
    'nieklu': require('./assets/images/Verbi/nieklu.png'),
    'niekol': require('./assets/images/Verbi/niekol.png'),
    'nilagħbu': require('./assets/images/Verbi/nilagħbu.png'),
    'nilbes': require('./assets/images/Verbi/nilbes.png'),
    'nilbsu': require('./assets/images/Verbi/nilbsu.png'),
    'nilgħab': require('./assets/images/Verbi/nilgħab.png'),
    'nixorbu': require('./assets/images/Verbi/nixorbu.png'),
    'nixrob': require('./assets/images/Verbi/nixrob.png'),
    'norqod': require('./assets/images/Verbi/norqod.png'),
    'nuża': require('./assets/images/Verbi/nuża.png'),
    'nużaw': require('./assets/images/Verbi/nużaw.png'),
    'nħobbu': require('./assets/images/Verbi/nħobbu.png'),
    'nħobbux': require('./assets/images/Verbi/nħobbux.png'),
    'nħobbx': require('./assets/images/Verbi/nħobbx.png'),
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
    'tilagħbu': require('./assets/images/Verbi/tilagħbu.png'),
    'tilbes': require('./assets/images/Verbi/tilbes.png'),
    'tilbsu': require('./assets/images/Verbi/tilbsu.png'),
    'tilgħab': require('./assets/images/Verbi/tilgħab.png'),
    'tixorbu': require('./assets/images/Verbi/tixorbu.png'),
    'tixrob': require('./assets/images/Verbi/tixrob.png'),
    'trid': require('./assets/images/Verbi/trid.png'),
    'tridu': require('./assets/images/Verbi/tridu.png'),
    'tridux': require('./assets/images/Verbi/tridux.png'),
    'tridx': require('./assets/images/Verbi/tridx.png'),
    'tuġagħha': require('./assets/images/Verbi/tuġagħha.png'),
    'tuġagħhom': require('./assets/images/Verbi/tuġagħhom.png'),
    'tuġagħkom': require('./assets/images/Verbi/tuġagħkom.png'),
    'tuġagħna': require('./assets/images/Verbi/tuġagħna.png'),
    'tuġagħni': require('./assets/images/Verbi/tuġagħni.png'),
    'tuġgħak (1)': require('./assets/images/Verbi/tuġgħak (1).png'),
    'tuġgħak(1)': require('./assets/images/Verbi/tuġgħak(1).png'),
    'tuġgħak': require('./assets/images/Verbi/tuġgħak.png'),
    'tuġgħu': require('./assets/images/Verbi/tuġgħu.png'),
    'tuża': require('./assets/images/Verbi/tuża.png'),
    'tużaw': require('./assets/images/Verbi/tużaw.png'),
    'tħobb': require('./assets/images/Verbi/tħobb.png'),
    'tħobbu': require('./assets/images/Verbi/tħobbu.png'),
    'tħobbux': require('./assets/images/Verbi/tħobbux.png'),
    'tħobbx': require('./assets/images/Verbi/tħobbx.png'),
    'tħoss': require('./assets/images/Verbi/tħoss.png'),
    'tħossha': require('./assets/images/Verbi/tħossha.png'),
    'tħossok': require('./assets/images/Verbi/tħossok.png'),
    'tħossu': require('./assets/images/Verbi/tħossu.png'),
    'tħossukom': require('./assets/images/Verbi/tħossukom.png'),
    // Xorb
    'flixkun': require('./assets/images/Xorb/flixkun.png'),
    'ilma': require('./assets/images/Xorb/ilma.png'),
    'kafe`': require('./assets/images/Xorb/kafe`.png'),
    'kikkra': require('./assets/images/Xorb/kikkra.png'),
    'luminata': require('./assets/images/Xorb/luminata.png'),
    'tazza': require('./assets/images/Xorb/tazza.png'),
    'te`': require('./assets/images/Xorb/te`.png'),
    'ħalib': require('./assets/images/Xorb/ħalib.png'),
  };
  
  export default assetMap;
  