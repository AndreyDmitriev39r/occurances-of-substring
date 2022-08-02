const representIndices = (needle, haystack) => {
  let arrayOfIndices = []
  for (let i = 0; i < needle.length; i++) {
    arrayOfIndices.push([]);
    for (let j = 0; j < haystack.length; j++) {
      if (needle[i] === haystack[j]) {
        arrayOfIndices[i].push(j)
      }
    }
  }
  return arrayOfIndices;
}

const addWeights = (twoDarray) => {
  twoDarray[0] = twoDarray[0].map(index => [index, 1]);
  for (let i = 1; i < twoDarray.length; i++) {
    twoDarray[i] = twoDarray[i].map(index => [index, 0]);
  }
}

const countCombos = (threeDArray) => {
  for (let i = 1; i < threeDArray.length; i++) {
    //console.log(threeDArray[i], threeDArray[i - 1]);
    for (nextChar of threeDArray[i]) {
      for (prevoiusChar of threeDArray[i - 1]) {
        //console.log(nextChar, prevoiusChar);
        if (nextChar[0] > prevoiusChar[0]) {
          nextChar[1] += prevoiusChar[1]
        }
      }
    }
  }
  return threeDArray[threeDArray.length - 1].reduce(
    (combos, lastCharWeight) => combos + lastCharWeight[1], 0
    )
}


const occurancesOfSubstring = (needle, haystack) => {
  arrayOfOccurances = representIndices(needle, haystack);
  //console.log(arrayOfOccurances);
  addWeights(arrayOfOccurances);
  //console.log(arrayOfOccurances);
  return countCombos(arrayOfOccurances);
}






const testSubstring1 = 'ABC';
const testSequence1 = 'QWBFASYRBYFVAREEQCCDJACEEWCCBWRWERAG';

console.log(occurancesOfSubstring(testSubstring1, testSequence1));


const needle = 'join the nmi team'

const giantSequence = "ia nejoiiatj  tm  teeathneni iaennjm iihomhh nt iih jianiihett hnthtajimjnt tit tnjeaajjoeae m temotm tmtiamh oiaomejjao tm ennetmnee oinmtn h m     hn in mtj mi jnninei meai hhmeiteh jaitamhnteonntm emn mjijmjntemt  a hnimeioeiheh hmmjmiomi  neojhjttnm eoeetn nemneiin iime e t  mjjmte mtnent nm eitn mni einiii  t inoeomjenntmja mn ne mjjt njejnnnijmmj e tttnoaetott tejooo omom o ai  hjni mmia m etm himat me oieneim it  meniemitmin  oo o jinehinjinta th meiim tenjmi jn ihmno nn ai n mntitmmotninm hiato emjjhmimnimhm  ane  memmnttooana mmami teinehmtmt htaheoinnto  mh  maj  imnnatn tm  matiime  neiahotee mtoi hhenjaameiimio e onn iman  tnioao ioejot  teeneiietiotomtmmttj hne jemtitmnnieteeimmmjntinimmhhieen e etimjtehi jonjittthatmtiiijth tt attnnit iei m  eehntitmtt neomojte mometji iimo httjmttmnmtimai ha enn nht jttnimai nm tmoeajoihjeenioijahoi mthnai ea ejatjjehoa mnttmnniamtitanmmeai ajjao tientjanmittj iijn jniatmttjienmnmntmeamnimnhm ei etntiiojntettmtttttnhtatatai oinee ojmonenjn tnentjamm n n m hn nie tm    aj eet a hemaoimoej nnmj  jmj ea iht i n onentottonmtnjtej enntjaihh mnt t aitnaetathamnmhj ntnemme mejhn  tm notoeij ajemnetia o m ijot hmaeemnmeajhtj tmin m et n  itnje at i hjt ehmmmiii e niojm enttj m eaeenn nnt nenea jmtjnnaihnioeia ntmi  iejet tnmtt hht  i i thioa jjjniennitah nn mntaoehtn ietjhtoht nath n eeamj  amnthhjnntmnmimmene nnmtje me ihtei  it  aoinjomnm t  o it monmeomittetehejaaoaojienemon nnh itttmooeamt m moi itmitnthetnnoimeeamnte im e n m eneminmm  iniiemoeie inaiei ai   ahaotemejijnmm jtite nmihhnnet   ieojeajma nn  tnnteteiie iiometitei tnt en memihemie ti jhnmehoinnajen etjtmmmjomnmh ie oe atmomtmjnn om amhame eeeto eiihjamiatoaj io hjeta  hti itmnaoammeoaiitieetiet iijajtm jh n tenttt m jia enhnojeoaaennea mitehit htneeomeito tmt antoiinmeho nemmiiho tmamommjenaijjtimmnjjtmatnnmain iia tatno ao  thnte ijian e hotjnitjnnni itjhmhnaeeoejme eaiaiiihaim hi ne aji mmtjetj oanntahm  i tna oh jee ehe  n   h  nmenaihiaaoem ijao h he mhetmtmmnn tninetme  enhmnehhmmtatnain t jit e   nttimiinjjmmm nt emem nmmaitintemonmnn  neainea eettiatot aeintiteinjnt miheittjnmeh m  ieieim men eh ojm eoeioo me nm ihn onjjjnnanejntnhahnj tmmnnaontt entenmj ne imjnneommenamoeotnhomaeo eomea nnnoojnimm emhii aoe jinnnm mnjnonmnnea eihono  meoeetjehiahnma    ohhme maojihj eeh  tii jtiamneo teemme jaihaietjitetmmt  ie ia atmnt othn  ammm et hhtmim iihaj nmojieheiit    i moat mtn emi hnoe  emmj htno  m t nooe e e  n tim  mi e  en iitjito nhne onetjo nmtionihiiaheie m  naemiaem e  eteoeo t mioth  hj nahnj jijah tithohiaimm hmtitene njttoetmett m mjh nmoeto jhon t tmnhohhai etejhtnntmjii iotttijitmjejetiinjmnee jnhototeii  ttimeneei iteneimeemjtihejtjinn hioean neeh mtanmheiinjjneo emtetain a ttonma inejnjn oiiihntihoojtnmjetie omemeetamomono tainm n tntin menm ie mtij t hto m    njian heometoeoontieneea ie emnjmaaeitin onhmm ihmmmj e m noheojtjeetnmmmnmme  nohnieom eenn inmiojjmim eme ommnmite mtieatomn  i   hen  hmnja mojehjn eiem himohttiejm jn ma jmihmtetei nohiite nmhmnmmhantnmttj iaoone ineejatn  i htithe mttmj einemeintmnntt jmee n ojnjtjje amotmm i  h tineoi enma nmj me aee tt aon mjeten ihii at mm ttimnhhmitotmitj nnmtmi nne ne ttemm hmhijit jtn aimeeoohamatt ii oemot i menaotenh o eeheh  ieaamt jitimhmitjmn tattttnnnmmatet ntttiamnaiaaoonejn th mnea nttmjm htmttn  emtijtntimtonnjieemeemi htm tomtit  i jttea oai tiai oaoa ennej i jenomna jmen nteeo tnh jmeemijiiehn aijmienminjnmnttmmene nn t m aoioomnnet hetjeieh imnhiti  tneae j  ntnt hm etnn  i it ttjmm  ej t jm ehi o  i tae mijhmjman tnmo m neontnimeehttah atemth  ijnntnmeojoe tjonea ttmnihnmtina eioiomtijnht  jie m  neeetmijna imntmmmmntteeei tijetait tatat nt h etimi o tntitt i neentnei jameme tjheiait emntt n  ooannemohj t jeiemoj teahnnmtmtaj enijtojjeto maijmmeeanoiteoi ohnto iitijo  jieomeaeto  ahnjoietm niietimoem ejh mtmjtoaimmtteita mmn  nhinonm tn hnm  ti iea  emienm otemem a tniheiaithtntnmnnmiomhnatehtotna   hhi inehahtomm onit mie  itiijejhmnnnhmot i naetoi jtotn o monm tnjmmmjt n  ih n   tmjheooen tioh jh oijti  j i na emm o ntjhmo  io nn namjai haiitmt  ojjohjni t  n  ohii hei ntjiina nmeamjo ttmetimihih mjj hoiommeinio  i o nm amh otmjejn o hianeeammiin meiatmtmion mmtnimnh tnaiiattooan teho onotiiiht mi  anejothne  mommnojhientjai atmmiio  eoe hit ttiehojnmennmmetmj ii hmheitjj ttaiim amniinonhoman imin ht hmti mh i o hne t mhieotetaannent  t ieeaaitineaee m ht nniheom e mnmematin noho ijtjh  mnio itiamiehm  tmnnonmm mh janmonihej tmnihthiohtmeanjieeeatmneinej tt neitete oo jttnnnmonmmmteetonmh jjjat ianamaiioetihhthimnm enoiminnai e mti mno h iia  i  nenieiemmni tt an iimnnoiohe mae   anhaeamtiammeetiettmmete mhneejhoe ata jtai  ehm  n nenaen  eni maett tmmjehe mnjnm hii iininninii meen eea ia  eemenio tmhjtjnmniaj enhaeintit n nihmen enoahjooaimhim omee iite  thamm n mn imit o ntmtnjntne ahnt nmj imthtmoiniihe ni  mem hmti ei mtaa nathoaj h ijnejjjtejoi mt noh tmhnm  jmatimeojeit iahheiae tmjatmaeiatjn jjnja ene n m nom jjhhm ntnjth eejeht nmeiaoaoieniaa  n th otnm  tijnnimhno i inhjianhiethmnmaea  a  m onttenejmenajnnetmtan tee h mjjonthjaejat ettenihmjm tenotaoeaij njnhoi tmjihn tnt miiinmottj etje emin mnhjeitimnmo tt ainaihnnn iieeejoeon an  emnimanm  te jo i animmnjiomhne nmain tjjme imntniaao  iinoji tto  i ti mn mn m eeiahijj ioemhn i hhooijiiinhimn iieenantmeahiijhje imnt njiejahij  nioni  nnimnnootimimtiiiinoenttteehmmeiim  ntt  hm ntnam mtt ii n t hemhnhnjijn io   memnnttte emtht j eh   tjjjo  htateiiieoitomie ii jennt nth t n ohh jeenimnehe nnnjhotimmjem hnetmmeeejmh etimhe h mnmntmot emn nnojmimjhjeomnm m otn mithath oainmttnh mntmetojjntn ehettiit o ajtnmim h etnmtnimtmjnee omtejt ommi aaoitan   ahnnh jn onnmnhitmiminatn  h eiht an ae jitmaiinmtntaiioea thiiihmhenemm mmhm n mtm atm iijjt nnhmoaei mmoh hanj i maotmnhijien  thmjaaij ahnehama njei ne ti eitnotijei hn emheeaja niaje  aoe tm ejmmttitnoimmjmetem eemntoeoeeneen  am o i   hn nnnjmnmttjh emmenome in ttnnitjah mh nitnonmonemteojninhm ainmma n tomnioiiit  mmeinnna menneteoh e iei mtamtint  ej tn i j neman hemnmnt  iiomihe em ttjttmtenmmaea e tmj io tetntmem emo t j eamhhoenje nmnje n  hh  ht it atiniomjtiejee e tej thmotttaonea hjtmjiiai  mhj ejmiem n nieoj th ihttj jnemm it iemmiihitnttmiiito oiniiiomitem enom  ijietmmjthie  jmm  nenm jeoietm etmnmnn atiemioneeo eonem mto  mm intte imi o tmoa  jammnm tej   hjo ethtmia  atemee te enjt  t mtmhmetehetmmnmhttttm jjeot ti maetn omint    etoiiiai htooontooieie mooahnemetioehjioeai mteoej oej  omeio oein  nhmm  i omh memeatmmmeijt a aijinmtehaiea mahnt et tiatei mmemtemn m ehhatttemmiae ott  j oaeetjemmajhtmimtn a nt  motoo nm ot  a hmi met hnni jemm   mjan ma  e aehmtnaomet ntiimiai amtmm ioohma m a t mo ieethnnjtomi naetmntaaamehhth o a t omteoaoeij ema eei  jeoehiati nt enettimthhttiintiae m ainntatmmiteeoieene emaotnjiommmiinmomn mhio t aetm tntioetittimahamte meeotnmnjmetthmeee m jtnmiom ni hnmi natn n oianmnienmjnoiim tooh toa eoeemnm on  janjitn maoojettni etmeh eanmmeino ihamhtjet nmjaie o in jihimj j aeietea  heeehjeioi iete mt nejitijiomhhhe tn mthtmjmaeeaiiini ettma htinneetotnehne oti   tmnieaihnnie n ijtmnitemn m  ejnjm   aeie  i ttti m neaiaean a tnetjtmi inaej ii ihoot jinneia ihni nh tnhnmme i i menmn tjei notnt n eiij ta  emtjjtmmoemmih niijn tjemontjieetm taiamnnmiaeamiath te ejne htjmtham anee   iheoittaint iienm ntee ihtjnn  ioat  inhimoemnhmoahmhii eimja  je  imenteiio nih ote  n mn njeneaemntie ejtomeeo ta   eejneomm ntioo meijmnmoiinmt itmnmj mmtitanann tnhnte  j ohennjhnoitoeaatit hnenmhthieehattimenimnmjiaajo nethm ttieiotoam e ejeoj  ah mi eeihie taee mth neo ti tennmntem njem tamnmmnme eajnj ma i   htnahiaoee ietneiatjm o em m eoatttij  emmoott e t ntnetnnhjm aee me atoeein imm oitimn tm e nahm   hnn m e eo ana e to th emmnnoej jm jhn e e et teeeineejee jnioj  t ij m m  tnoiont hi em ainmnaijiejntti o iiit mjoitm teajtim iitneo jmm  tno ion hnjnhannoi ntoeiimitnnjthitnnhenaatttm eonoa  ne  nj  tahiemntnenm ja ajemm   ijthj ihijnmioae it ii j mjiinnenj m amem jmnmeoo h metiehhnanh nioeno nm nn mtheimtna h eanet jmeenaiinettimoje mitni ejmoemtemmtnneiiemanmmnt nejtm mmh oh nhiea tmenm  n tte    h amimjoine etj aea miotmht itt m  tt h oe  it omnm eimejhtn o htnii omtah jinit  jneme j itehiimteta otehejamei e n iineht t mhttin tminenoejtnajteiemittemthminit  tiiietmenntmtn  ien eitnieee mtjmmne ittioajtntemtme  iiio hjteitmint e nt em tmm jonitnt mejjntiiheina memm mntnme tnmoenm n t niitamoaoietmhoemnm  nhnohiiajaoimem n tntie n   tj aeimthi emtin   tntjnaatimjamoee iet  jmoeototeajmmnnae  ai motenit ititmti nmimmminnjajam aiehajii mh niit mmtnm einhnem him mma temeet  ni ehtht aiihie tj hmeim te ohem n enaijte imna neieeeeiiie jta  ehjtjjoet emimnn jenen nhmnieoi eim nihjanjotninnoiomamjeii  ejijmnntm nt tmemniot inhio he neen iet  jomhihtaoe toeitninheh amtnometma jmih nt jannitaeih e a emei  n  nmeiemea minhjonhtji   noian ejajema jtmiaiomnmhnijta jjimnehmth mtmjimiji jhhhmjhtmetmn  moit m tmtamjm  moihon eimmontmihteeh ijjnmjnttnema iit  mhe jmitjnntnntteetiiammti e j eeniethneaemimhae  mai  mh ee ititjoihtm  nhhmte m it m iaijitttitati tmjthetitntt onhe  j htonmeitihnoha e iit mnn ah iejn o  ne i o im   hmjammeo ehi hnjem je iote ti noamm nem tmhmtnmtnhthm emantn eih ma oneh tmehmimm tmmtmejae  oa  tmtthneni mthmteahtijiiaini oamaat tmo itimn  jiiehinjoi  mtimnn ee nhahnen mnatetamtjin iaemimhmeiinjn aojnimto  om tnmeohj heennjemninmnotihhemejenneit  nmiee   toee mmjtthnme toei taehnmthttiihinot oneett jmh  o inm iei  tnoatiit  iiommontmeeejm  imeiiietnim mnnoamje mntemnen n ijht  i aone imntjjnmnaoeonht i t t tmt jhmtnn tmnantttmaaj iineimmeatimn t teoahmiit  ihthjanennej  n emti m nj tnjtmii oimmmnionithi taamnitmhitea ooei jtanmjemtttoi m  inenimmmhoit mejaoma mnthteo nhe  jhamm oijtietnmteemi hmne he oi  j   tntoeneeitem ntonnntaenjn nmmje nneoet mohneanmeon mmejnonionjetnieimt jieammeojhtjhija njtojia e atjie ntt mhnm nhan io  ntiin eetannmimaimtnmjtmmtnie mittthemtnnheinhonmeemenne  nm nmo eehonnmmmtiheth  m mniet enaome jtn hnehmjtthnoineo jnj mnmjnon eo  thi heo mietmanjen eihetejntionee iti ntahietiet mnhmiihi  tttn nan mom   hte nietjee  ijmmt ioeoioi innemjaemn hmnehemhta ooean jenioeiiejnjmtena n  mnnimtnn jnhn emhioh imjnnaetiotn  tnjtjjaeniee jma oatmi  ahnineihei  imah tn tiin otanjhiememtmtnioitimihhamiot tao oom nno hjemnat manm omenhin  thtemajihh  mantetnmt  hamto ott i on tmin i  eatinoit j ti h jentmt ttitoetn  aa jjn ott nntnomtoteemniihm iiimaimi  ejtith t tmminiten one tteetono nanj aej  mhi nn mi ha  tinhamainoitjjtt hnnie ehhat nnmaojt ma oojooeam iten emattimttehtio nhtmea  ehnmimniennmt mmn jtiooi ataeon    m  tmta ime it   emitn nemeioie aio mm onmt mn eham eome hmenenejmmmn oitaa en eotm entimtm nnm ia  mtaa en jamonnmitmtttt nt t ij  hnimjatoeanoit mtn otjmi hnheeitiee t tmimiethtnani m meii omea  tmjoti ttmn eiijemmiaeto aiiemeiaen im emoij ejotmnioj taha hta tomao hinn th aihoteonnjmitt imttmnaomnii e jtihe enjonjntt jmjtn iie tjntnnonmnieo am imoemjatmie j nj tneetejeionn miijnioeeimemmmniea  tjnt neitii tijet a ote hjhnaim i mn ja inmm mejet nom emiietmojiine otem ee  a metihnih t metmnjtete m j ht  jtitjoaienmithjhmonheoi nimae n oeeoat hmnjtnoi itajhj mi am oitmmeati tetneh mnoem eoejmtieetihtm m nhiean m eiteinnm imajh i n jijn iee  onmtnjmtmnj  a eiamniih  aaitmeeejnhoiniineninotiijethnn e mo jatntet nmijnt  meam  mee tiehae ijnntjit n  etiai im jemtjtiaiani ij  hnea aiathmmthmnh nnmiea nhenaoai tae tneeintohihmht n e ittnhn ajmt h htinm mtinieth tohohaemihi ininn eoomja monaea nttm  nai itetnm ejhojttihjnemth oh hahjn hmtmnmhnjemt    en im  tmi hieejjnjmehieetnioahm mi ieeoooetntemnenhnh oien hm a hehe  ahmiat  eti nj inme h tt i ijmmatmm ai t ejj n  nmnaomneimjnaii    ie mh mhnniao imeiniti  ohmhmhat i me jo imtait t emiii  tiiijahiimjhjoiiomjnt  tni t  tjhmnhennnnnmnim  m ma e im je eaetonii n tnemtnietmheoinihnneh iimae mj antejan nnej mmmhinnnja mtnaemetttnei taanmnnnnni tnt ah   mo  a   i ojn mh  monteeonh oetja temenioii miieit amht mi onji n t tamentinmhjmin taeoantmotimamahmtjhheomtemei meetnhhehen joom jt enh inaiioimnieo tae ohti  injnmnnehth eeijj  ot jinoje  oajiojhietee a ea  ehnihn  not nitttt    motehntimnj ahiiaaniiehetn  i jint aj mj m hjn ai mtnmnmie em   tjeh jhtiai oii e jmn nhio mntietmnoimet mjmiieoae iotnthtemnmetnjeei ii n aanjee m ontet hahn n ihaanonttoiho te tmomhehtttjmtt   ntthoi t mtt emea ttimiei tmn  tenimim n o  miieemninan nhnteenijii temn   emhtohnna  iiohememiaitmj mn oe i jtmmm o itto tm  ame mni entnanmin m tthii em iehm anejoine ijetnoeaettmaejet titnmaemjoeehje tih ntjaea etjio  iheojenaenatt mimnmmehane nmtm  hanhtt nti ia tej e i i ea  amt ahi iaeeommmeat iijthitemti tat  emehheehehttnt ett jmimetinnma haatttni memetoiohmijo ehammeni eoo a hnaet iee  ha  iiantnee  tetj oeamt  mni enmij tmeo tm j oetemttao iojttatejh ehnaaeaian t o  eihtt hi    teei joiemttinnimtmemht eieieae   ajtmiiaemom  mtiotoeoaj jeheniioiej mm njiot a t nnten eimtetmaaminmeijn tei naehi mm  moihno  oejjtnoeee mia jtitmojniihoietin nmjhiat ihinaiaomeijoeieata mejijo imtni e m ii je o mnieeaheanemonmh mone ojemj oim iiionnm ieenhenojiiaetaehmo oon  hetmttom tj aitmeijmmejnmnmothen niom   n mee jieotjmhmma jimaeaojmotiheehttihjnetmh ntmehtotnmh m nieeon hhohan nmettonietmmtha eem ejmnetie  ntnjnnitnnonnemo  ninh nmi im anninoiiaa ji e mi it   i inimmoi n mae e  jnm eojma  enmiho tnaeeietomne njemanme  haitjjethm  jh h intn hi  niiii meeia e annan tomehimtetjjjn n tjnmaeen i i jmtme ie mtnjt  meojjjae onie een ejem amtemon oitoiej tio mtatniimomijme mnitmho jatn aitej inhti m  m mn i aoniieei th nhnaannojnhntinjhn  tjme hi    aeatt jan tooemotenoimjnieihinoojjae a jijin  t neh eetnejmjnji jjonaemoa themmj jtaeo toeht  nn ioe i hee eehaahieethiaenntjta  jaj ehi ij naiam teamt  no hjjejme h eihahatjeenie mn i tiotimhitojom  eoeii o mmnmie ethmioa   mttn thm otmi mi n n ijioi ji t  meta emtnm  nmeiaiej oieenntjemmihnmtn jtt henntemhmjn etjntetennj mntjjn emamttaihanetjamttt tm ememmeiiaimeeh itihmeh ei nemiieiioomnt hhtttjan  nim mtjtnmmeoijinmhjo hh iee i attmaii h   he  oeeoametim nte  imaotntit hihmieen himi nhea iihtjemm  htoni  nntjnmjn mmi e ino iitme  nte neeh jh  moetmij aijmehn o teiojn ejnt temmnn   nhntnah ji  tt heahhianonttton tmeoi emtia an toi etmiene mntne ometejmnme imt   imitjttt hi nhnnthmemnteime nijati h ontet iiee n tn ijeo atnmn o emnjhmhmij  n jea jmnieoeijiiiij iooie t neoaaaeimteo a mmnoitiej m  ionaateeni n t t t  meh j t  jmaonej ia hhaainimmena mnta nin oi a nmmmjmeaijmimjaat omhmnniimtennmiimiieot ie  thoe i oat mhjjamio   e tinji teietmnn ehmjtjjim ttmjniheaeminetoteihio oi onn amoaj nei einommnhee nm iomt i ninoieimjieitn t itmahnhjmtea hommittthememth iieet ttieme eaoanjotea iani mhai hajn ijnm jnemoeoe miha oiieot e tima nn notnnn ma tti htiehmne h  tnaeioamtoin oe hjm tim onnenone e m imt ih n mm ahnjmtiiem a nnatnemi i in aioioe ieotma tetao n nie e ijnont  tje o ejjieejmnn thi nhe mneati timaetaamt mttnjomihtotjit miihmtteiitjontotottiaj iot tmnhtht ione tataie   nammet  o htai iahte jtnhietamn nnimne mtimntianoiitienoihaojenmiimnnhee toeemj i ehihe ttte aeemjmnhejani iitnt jiiemmnatoin oenijaioeh njhh ne hn j matjmj iaohamnjea hmitnam tintiinenee  tta tetmtnjt t nem mnt hjineith o ta o ji tateo emtjene  jhht eejmt  tthti mmhtemieentaet emm jjhttoine   o oenoie t etjiiiih i j tnj itmt o jnhe  ni ntiaenmi imoeih ettaenamahtmneit tiie eoaentontnametihmott h eimieimi oomteoaimttoim ij e minti mt ttte i tjaaeijmm oi nhhimieitihnmne tinho n  nhjtj eeonh hojoemoijtjiahnenmmthmohimtt nja om ijhihhe toihomiennt nmoieomonneem njmh e mtnmamnitete j mmhenn ee eoiiniot   iae ttaetn enhmto  tttj einnatenneonimeeiaa tn hj ihoiemeei  mtaeheihanne  ijt j nema nt  neteht eam  inmeimnnj h h  ao imam tt iihaineijiinhim mtjh oea tenoma tti amma  ooaoenhammje  iha jejhnieo  m  omni t h iemii oomomm iitneenho jth oaatjthiei nme mtitieinjjitjminjmeem  tnao na n ammtm eiiiioe oeimohnhmoehihiemntnhhjnjih  nmhiit o iimmo m omteii nethnoieoji tettj hmnmmt nmnhtemiimh metimjmee ehi mto   aoina ho ttammnmi en taheeiaoinm eimon htj aitnt menttaimoo   ieoeonhtn tem mieaiie  hmoe tim mohitt e t itttm et mtonan  i nttmmme  at onnhnee nttihnniaaain tnaniei ino n ihtinohntnn  ieihnathn noh iitht n ateememaattmin emon imnt   jnaninhneenttmihiianmj ontt menioonntntnemmnaomjtnmhnh   entihmt nme tjn jhiij ant o ttemjttetommot eeamet jtmaa nmjmt me a oj oojtma ntottetitoatoein mth ae mnnt  no iajoi e ittnahjaneioeioh ea ejmoajnmtiteeimh j ieettoeit mjimj noeiei tnm ai ne mmj   ontihmii noionihttm maatmnem mhtnienim neheamj heaotejmenootjeinimtenjjohamma h ienj iejnnenjmenmnje oaimameimmteita tm ht etimehi itnt omm mnmhhati tioienmjnhheioiehhmtmn ntin j ethne oh ttine e innene hnhmmene mmneomihhtmtneoimtoe e m  ai thotmmenoeneehheeo tnh jm  ehat teoah iehitto intntmnejnt oinhe e enjnie mnh aa i  io eh aomtn noahi ontotitiotttt etheotmji  eme  mh  eoa tmmmteot  mtene ohhiemhtminete netit  ne i n oot eetoeioni tinennmt  aimjmn oinnomanej h t ejnennttti tietenmmoomj tj n  amt jejtmeeominmmomnnjnntt tnjo memm jeeeaaej emnhn h m onniniitooetoeimtoeeneeiniemett jenn tmneeen j ooaai htmjin  ej inin i aom hmmeiathm im tintmntie aaiie  tmetonnhaeioeeamonmtjt  niienaoenmnmnej tintj ho me  n  eathee he mmame ojjonen emm tnnii ommtthe t  tmtejehemie mnoet jttm i mmnm tt iitnoni ohtien nntjijieiijiaeemmih nmma j e eaiii eiathjtjanenimmmtn i taithn o naaon into  iehm intteo iai enmioa tnaa jm i mtm  tnmatoteenieettmomnm mm  ohmoioaijtjin jtiaiaitjmejieie t taheto noiinia nnina e tmneeano oeiennemennn moomtmhniiianjttooanttomn ttat eet ttemjmoanoitntn nmennntm inhineae ee m tjem nemteetohijeh   eihie nmnta tn je t toh thniiem mjntt h ottee e tino ae  eim  entijmeei  ahnnntjetimnmi ht moathmtjjnn moa ti tmmemehtttnthi notjoh  anhtiiamjan neat ianont mmtijnmatti jn o jnj etnintn o h to hjmihtieai hnohin e aiai hj nonnie nihmj  h mthi  eeatiinnihttmeiijtomtm  to   jmoeeam oti imemiime ntej nijahja   ho  aamjahion  tetietajtehe et ne ihiiemooimtnen iotooiaemm ti tennnemia e ojm  oteihmotm jteno   tnaeem mitmaeoni nittmjhmamjmita nhieii mmht m mii  tta nete it hieneiietoi iieet hij a iiimeahnoeemjittne an taeij eatnman enimeiae i  ine  nm hm tnjtnm ieohtn  j e  nei iaaa  ioonh naajj emtnm ja n eeat tn mmtijntm hmt mntnotoehe ntnmnin t ieojtmhthmhmemj  eimiehitaejem o motn omo nnimeee enhe n inn i  thn eiomni t hn emtn nh inee iino oaaneoehei mem it  nmetheooniit o aaett aoetiia em tj namt  etm jaea timajenitojmetjtjmatent ittotitneeeeejjnijimentei nnemtntiiotemmao  inm nonh n et jnettteee a aenem mnm mnaa ntnit ii aim han  tit ie i ioee tmaoijtnaanm ienem niaomom nj etihahhimtmtmaat te mnioitiemiie ethnnotnim nntjt ttt hetoat o  anmotiath tajomhet n oinnnemmmn ntmm   ejotontejnine eeeethjamnieioamttihm nhimmteeni jimeinjiiee h jnietemnjmitejai m ehhheojaa  et nn en  tmtni taintomn onejm etnjjeenaajn  n minnm nit hn ha io innh ieoa thten htinmmat   mht nhmmeoemji he mmitiihiniataaniitom m ia  ii eo mehm jnemmteim moiijeeamio aaema jnmj hj ieaihe  n thimn ieinom onnimmii jmmhe ej neiimeeenh iintait tm en njejoa  jeeate  tihaj nt h  neneai mn emnan tjniinjitmmnm oni mjmij e ijhi i i e tooaomah o j nmen  omt ttmjjae  ntiimjjii iaoitiin  tnomeimtnaji nt ntmhtitetooeitnmjtmee ijniieam oti ittniamometneintoemoii on tij nitji mtmn aoimt it teijn ttetem imiine ininh nemtt   tt omih teimj n jii ajmeaat mn eej   amj ojthnte jiijommjhnimmotmn ie  nhtj htnmtttheht tni   n ttn om ennoahin  miemmi tejjm etiieii hne oentniai atnhimeimajhmnn e ioaii t tmej tt   tiiaoitienm jitmtm iejiejmnhhaaijnmo ati  e em nnnhj  etioi mnnjitoh a nit omn neiniiemt it  j hen n  tim nn  oiiit i mmeeoienj iteijitinmnaetjnjeeime jaeite mm   nijntje e  mtiea titnn nmnim ma tm omahhimhetnhn jt nt njei jjjem maettimim am ejmnneeoee iatn ti  ijntm a najiaieeo n ieijiatem   n jnnm tetetmt jmen i teim  oj itnne  ihtinteetj h ai  eojmnjoatmoninanhj ienmeehnhjioati jnnannj hmimji ioaint  inetenaa o nm hoejoaitjtintmiji ee ihim iniae jtnon e onehnieneaiinotnnm ienne tmijtaohh a aoaetoeeemee o atmhonoihj  h mai e  aahtatimah nma  jeajimeh hom n n emhmmjnj  mej eee oom thntmittmitjtejeenmemmaejtmohmm tija eian aaaa t h  mimmjmoeaiineniooejitannetnhi emmtmm iemhmentjtaetni ihoeaeont notnejm entmjtamn  h mtnoijiataoe    a iootie om mjmntnt nehah tmtne tnteemeoj mi na ontminnjiem e ntojnmjjoo i jnmt toae eemto tnini  m tittt tnomea ttm tanehheoaoei nehht aotj iaem enjtta itejei i nnimtmommttn  timej  teoma tmimt t naennmjoetan  ne ttnmnotttmmj hmnne eae it e taji mie    een  nmeoi mnmit ieooe t h naj hatiinommtemte ioe i hhtatno neoennn titojmeenomimiimnaahejojenejhmtiiitionjttjmaioa jtietn iha te  ji i  njtnm hoiio  ntejmea itnitahmmaii tme iie mo antaenmoment m t em nm mtetj ath i aeaje nmeehth tm hteii  mnojittmmnm aeihi ijtam tmijiattoattiihttjt emmnetnninejniotoeontamejh henm   tmjhn mi tttoeinoeioaneinenni  mi ta mnm tten o anttetemiinteitinijeoneta ii  eimt hnmh mmooten mnmjtee iee  o jnmmnjenma a ee ie  emnniojhhoiei jntahatienit e jtmmnntmnijteemoenehmti n e j  ona io t itn nnmitjjhhnimaoomthja tjt emamnee j  ona  noiinijn me jn etiemit nen hi iitehm ennhh hnenhiit mjee  nh ho n   aem  iitieitn nnnjhttmn m nn eaiieaa m i emjhnmanj tmamnni mmimi nmjitimniinn e  noao e en eae ehoeneiimttimom hte an nemete t ia nhahm ni    inta am hniiee  ieettt  jaetim tnn   heammnhjjoi n  enjaoai nao  e jnaai enn m ji  j  mmnie mmeotmimejih immt mem  en o iae aae em  meie oette t t   tjh einhmanmmma ohjneemtotoajhihhnmeitni emthneememtimiteni nteah totm jethtan ejamintemmienat tt ho oiie  t titit nnminomojantieitotatnetnnoim  eajhoneiiem   oeoinjmee mmtimoijmnho etethioi   a  ainiie tenaeniema htj moe niitaneoimmihh te e ete ieji ehomjh nem eneeaintei  jmnihntam jn hot im noni taieeaeeeoeje jitmani etainm in meaoth   t ao oeejj  eeimhitoteiittai imneniii ni ommaimt ahnto namiitt nahanae ennhehmtmann tm nmmthtomn n hjjtnnnjmit ojetteo jjthtej tn  n  i iioemtamt  nt ntnmihim na timmiio  joejei oamt  meam iehiinimntim  ji aejm j    heeeo   hthmjiimhemoneantinoi t nnhtamn ha eomh htnmi tmijottetmin ntten imeomt tao haenaneimimmeaniioeen    ntt e et ei  h mjaeai mnhjhe ite otthnoomthanianm i n mn hejj e ene hmtjt mmhenjnt toihejteon mem it jh  tninei  anemaii  tt e naenheminteh tn oetao n eonttm naao toanhtaeoeonaaomii i  ao hmit eittnniij nie one nnea tj iia htinithe eojmnniome ntiioie tt niaet ei t tattmetji h i em  a  nhmaitjhotijo mmtio jhe ej omtmnnn etnneeheaeoai matth ien etem h t jniemmttiiehmhimteonmhmtnmtmoitoiemmj e haimttao j  haom enmj iimmtjtt iieijimoaihij  i metihjttiitmejiiahiom jmmiieehnona naoantnnn  him  m   tmmnet   i omhmiin hem mm enjo hoen  tj m tnit e enaem jnh n  mniijeejietemj  e ijimmimnoaenmjitniiinton onjte meemei mniottoamto m ooehnhhmemm om  eh me tnnhe itntahiot omioa im  mm e  meitihm n mtmeeijj a hntan hmjiaeh i hhmaj  eii iaeetjnnnmm m eeiinenmhejma  omametten j on hmaji  i eo  jmnomioeehajea memhhaenhane thnttehtne jtmjinnimnjheeaetoiohj ih oi  ettotjmaine meneinmhmheajtmi aianjjnjme naei mjeimett ihjt nni ei mnieahthnojnnn hmeiin mi ne mj n ejithnt neo h  niehehoinmaijn  mtehnmiinnt a jiee temeentnnnttii  tnnj ttjioot  ttha t mtoiia tititmio miejn nimtjnneoiiitejninttn mmja  mmt mheiah mniiennenh jajjnoatna tea  mmiim e ihanmt m tmthnim htatjiaitotoaon j atj nhih     aoinotitinonoihhii  itj mh  ajjtoijn nmmhje n ahhnenmejm t nt meajmhnnjmmeieojnenjmnajiihat mti h entenm ttttm nm  etajithhei ao tinie eitn   j  tion nnom mate mehtmtm j   nt tmtoiomiina   mn jnomhjnh  ao nh nemmo tmnno i  ieto ttmtjnhnttjh mjtatmihom hti ot aoi i i n tateait ieinommhta ohhnnih toete m i meeonoini  mmmmhenjnehtinnhteo o tije not i hiin ieon   mo hnj ihmiteaaiimhj n  i n  tmeeeem t eammta enoemhhaaoi tittnn ee  ooiji mnmn tninont oiaam o aamijjtoiejatnnm eteeim t h j eaehn hano mj nniajat ohjeaenamjehehatteaoomn iinnmjiih ntii oio n hhtetea eneiemtet tjjiiihnt  emo tmniaeoi  nejmnntnmatttnottm en htntm eanmtmamiii n  aonihnemitntmmmejam aejio tini e nan mneeenhjnejietottnhomomit enee jmiejaejo o iet i a  mtmtt enao  tininmt ioenhanataet joonm ej men n ohjteehehmtinnmt jetminjmiaeiem tmnnjaoh enoo etn inetn  ehiamain anemmmenjaja mmhiei mnithj t etienihn mnejoimij i eiame i nhnhomn h ntmmtj a tiajija  nhntttia  mo ehee   mnjtioeimimnnemhmo htee ie innanem nja jjhnmnime  noimte omj an e  ammaiho n  ennmmi m  j  thmjnitittjmii ne mmo n   nn imejme iihmeeminnhm jmt    j mnhmhean nhonen moihohhjnmnitnhtot e iim oo mmtminiioinjjnonjonjoonjjoojjnjjionnooinjonoojjiijinoojiniinoijjnnjooijijnnojjjnjininjjniiijonojnoojjiijoiiiiionooijoijjonoiihet th ett eeehhtheh   e   ethh h  ehth he hhet tthhththehht  tethhe   e  teeeet het   eeh eehh tt tht hthhttthtete h  tinnmi inn minimin  immnn nmmnm  imiimi  im nmi  i immn mmmn  mni  miimiini imnimni    iimniii m nninim nmnnnm i   nnn   eaat eetateaaa etea aa aat te t  teta eattet aattat eeae  aatt eeeaeaettaaa eae e   a aateeeaetet  tataetea te  et teatammmmmmmmmmmmmmmmmmmm"


console.log(occurancesOfSubstring(needle, giantSequence));