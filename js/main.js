document.addEventListener('DOMContentLoaded', e => {
    var map = document.getElementById('mapa');
    const sidebar = document.getElementById('sidebar');
    const changeBtn = document.getElementById('change-img');
    const restoreBtn = document.getElementById('restore-img');
    var svg = document.getElementById('mapSvg');

    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('region')) { return }
        var region = document.getElementById(e.target.id);
        var img = document.createElement('img');
        var flag = document.createElement('flag');
        var title = document.getElementById('title');
        var content = document.getElementById('content');
        var picture = document.getElementById('picture');
        var buttonContainer = sidebar.querySelector('#button-container');

        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            title.innerText = "";
            picture.innerText = "";
            content.innerText = "";
            restoreBtn.style.display = 'none';
        } else {
            sidebar.classList.add('show');
            if (region == document.getElementById('Nazair')) {
                title.innerText = "Назаир";
                img.src = 'media/Nazair.png';
                picture.append(img);
                content.innerText = "Провинция Нильфгаарда. Cлавится растущими только здесь голубыми розами с легким фиолетовым оттенком на концах лепестков, которые обычно изображаются на его гербе. Назаир занимает выгодную географическую позицию для торговли. Он является своеобразным кордоном между Цинтрой и южными провинциями Империи. Большая часть плодородных земель расположена вдоль побережья Великого моря. Внутренняя часть считается каменистой и бесплодной, за исключением долины Йелены и озера Муредах — одного из самых красивых мест Назаира. Назаирцы известны своим разбойным характером. К востоку от побережья располагаются скалистые регионы, которые до покорения Назаира Нильфгаардом принадлежали кланам горцев. Они вели бесконечные войны друг с другом за скот и женщин. Империя смогла подчинить себе часть кланов, однако в Назаире всё ещё есть районы, в которые даже солдаты армии Нильфгаарда стараются не забредать. Страна славится своими серебряными и киноварными рудниками.";
                img.id = 'current-img';
                restoreBtn.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Nazair-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Nazair.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Nilfgaard')) {
                title.innerText = 'Нильфгаард';
                img.src = 'media/Nilfgaard.png';
                picture.append(img);
                content.innerText = "Одно из самых больших и могущественных государств в истории мира, находящееся в южной части Континента. Может похвастаться процветающей экономикой и мощной, хорошо подготовленной армией, которой руководят талантливые командиры. Жителей Империи за её пределами именуют нильфгаардцами (нильфами) или Чёрными, однако внутри Империи нильфгаардцами обычно называют лишь жителей исторического ядра государства. Империя, кажущаяся монолитной извне, населена множеством совершенно разных народов. В имперское законодательство внедрены не только принципы равенства рас, но и равенства полов. Все эти принципы активно применяются и внедряются на покорённых землях. Волшебники в Нильфгаарде находятся под неусыпным контролем государства. Фактически они лишь государственные служащие, обязанные использовать свои магические таланты на благо Империи и слепо выполнять приказы императора. Имперская элита возникла в результате смешения человеческой и эльфской крови. Так, аристократы носят эльфские имена и титулы, активно используют Старшую Речь. Нильфгаард является развитой страной, обладающей значительным числом мануфактур, но при этом сохраняющей рабский труд и поддерживающей его использование.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Nilfgaard-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Nilfgaard.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Cintra-1') || region == document.getElementById('Cintra-2') || 
                region == document.getElementById('Cintra-3') || region == document.getElementById('Cintra-4') ||
                region == document.getElementById('Cintra-5')) {
                title.innerText = 'Цинтра';
                img.src = 'media/Cintra.png';
                picture.append(img);
                content.innerText = "Провинция Нильфгаардской Империи, а ранее — свободное королевство Севера. Цинтра была завоёвана Нильфгаардом во время первой войны с Севером. Стратегически хорошо расположенная столица Цинтры была отличным портом и рынком сбыта товаров для других королевств. Близкая расположенность к океану предполагает, что основным продуктом торговли страны, наряду с сельским хозяйством, является рыбная торговля. Традиционно в Цинтре трон наследовали исключительно по «мечу», а не по «кудели». Если у правителя не было сыновей, но была дочь, то она должна была выйти замуж или родить ребенка мужского пола, чтобы предоставить трону короля, или уступить место другой династии.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Cintra-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Cintra.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Toussaint')) {
                title.innerText = 'Туссент';
                img.src = 'media/Toussaint.png';
                picture.append(img);
                content.innerText = "Вассальное княжество Нильфгаарда. Этим горным краем правит княгиня Анна Генриетта, кузина императора Эмгыра вар Эмрейса. Благодаря удачному географическому расположению в Туссенте почти весь год цветут знаменитые виноградники, а зимы тёплые, но, тем не менее, снежные. Регион благоприятен для земледелия и сельского хозяйства. Он известен своими плодородными землями, на которых цветут винограды и оливковые рощи. Туссент также известен своей богатой культурой и рыцарскими традициями. Здесь ценится честь, великодушие и добродетели. Княжество славится своими гуляниями и рыцарскими состязаниями ― эти соревнования собирают лучших рыцарей из разных регионов, чтобы они доказали свою силу, мастерство и честь в бою. Турниры в Туссенте считаются важным событием и привлекают внимание не только местных жителей, но и гостей со всего Континента. Большинство жителей Туссента глубоко почитают мифическую Владычицу Озера и установленные ею Пять Добродетелей: честь, мудрость, милосердие, доблесть и щедрость. Не чужды южанам и северные идолы, такие как пророк Лебеда, которому они возвели огромную статую и несколько храмов. Искусство, литература и музыка тоже играют важную роль в культурной жизни Туссента, и местные жители ценят изящность и творчество.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Toussaint-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Toussaint.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Angren')) {
                title.innerText = 'Ангрен';
                img.src = 'media/Angren.png';
                picture.append(img);
                content.innerText = "Ангрен отличается крайне неблагоприятным климатом: уровень влаги здесь повышен, из-за чего круглый год в этом краю обитает огромное количество комаров и множество других насекомых и чудовищ, а в силу песчаных почв ведение сельского хозяйства практически невозможно. Единственное развитое ремесло здесь – заготовка леса: кедра, платана и сосны, а также изготовление бумаги. Дорог в этом регионе почти нет — перемещаться возможно лишь по узким лесным тропам, часто оказывающимися заблокированными поваленными деревьями. Из-за труднопроходимой местности Ангрен стал убежищем для многочисленных бандитов и дезертиров, укрывающихся здесь. Формально территория Ангрена контролировалась Темерией, а во время Северных войн — Нильфгаардом, но тем не менее фактически этот край никогда не был полностью подконтролен ни одному королю.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Angren-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Angren.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Sodden')) {
                title.innerText = 'Содден';
                img.src = 'media/Sodden.png';
                picture.append(img);
                content.innerText = "Королевство, располагавшееся на берегах реки Яруги. После Первой Северной Войны было разделено на Верхний Содден, отошедший Нильфгаарду, и Нижний Содден, отошедший Темерии. После заключения Цинтрийского мира Содден полностью перешёл под контроль Темерии. Немногое известно о культуре этого государства. Содденский народ очень религиозен. Люди помнят и чтут героев и защитников своей страны, таких, например, как участников битвы на Содденском Холме. Как в большинстве государств Севера, в Соддене распространён культ Вечного Огня, культ богини Мелитэле, пророка Лебеды и богини Креве.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Sodden-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Sodden.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Brugge')) {
                title.innerText = 'Бругге';
                img.src = 'media/Brugge.png';
                picture.append(img);
                content.innerText = "К 1262 году король Вензлав не раз пытался вынудить дриад перейти под королевскую власть и присоединить большую часть Брокилона к своим владениям, но его действия так и не увенчались успехом. Тем не менее, желая решить этот вопрос мирно, король запретил убивать дриад на территории Бругге, что подпортило его репутацию среди населения. В 1262 году, когда армии Нильфгаарда напали на Цинтру, множество беженцев пересекли Яругу и осели в Бругге, а само королевство вступило в Первую Северную Войну, объединившись с Содденом и Темерией. После заключения перемирия граница Нильфгаарда и Севера стала проходить вдоль Яруги, из-за чего Вензлав, опасаясь повторного нападения, принёс вассальную присягу Фольтесту из Темерии.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Brugge-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Brugge.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Brokilon')) {
                title.innerText = 'Брокилон';
                img.src = 'media/Brokilon.png';
                picture.append(img);
                content.innerText = "Брокилон — величественный древний лес и одновременно заповедное государство, населённое дриадами во главе с неизменно правящей ими среброволосой Эитнэ и «столицей» в Дуэн Канэлле. В Брокилоне запрещено жечь огонь и рубить лес: для дриад он служит не только обиталищем, но и святыней. Доступ людей в Брокилон запрещён: нарушивших это правило смельчаков обычно убивают, хотя наиболее крепких мужчин дриады могут использовать как «самцов-производителей». Лишь для некоторых людей дриады делают исключения и позволяют им посещать лес.";
            }
            if (region == document.getElementById('Verden-1') || region == document.getElementById('Verden-2') ||
                region == document.getElementById('Verden-3')) {
                title.innerText = 'Вердэн';
                img.src = 'media/Verden.png';
                picture.append(img);
                content.innerText = "Вердэн занимает длинную полосу земли на западе континента и с запада омывается водами Великого моря. Культура прибрежного государства, безусловно, связана с морем и морской жизнью. В Вердэне, как и в большинстве северных стран, поклоняются богине Мелитэле и верят в культ Вечного Огня. Местные жители зачастую выбирают профессию наемников, в которой реализуются в соседней Темерии. Вердэн находится в выгодном географическом положении с доступом как к морской, так и речной торговле, имея возможность прибыльно торговать с Нильфгаардом и Северными королевствами, но тем не менее, является крайне бедным государством. Королевство строит свою экономику прежде всего, на сборах с проходящих через его территорию торговцев, а также, возможно, как и другие прибрежные страны, на рыболовстве, торговле морепродуктами и судостроении. Вдобавок ко всему в этом королевстве идёт активная добыча жемчуга, янтаря и стремительно развивается сельское хозяйство.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Verden-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Verden.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Lyria-i-Rivia')) {
                title.innerText = 'Лирия и Ривия';
                img.src = 'media/Lyria-i-Rivia.png';
                picture.append(img);
                content.innerText = "Одно из Северных королевств, которым правит королева Мэва. Страна сильно пострадала во время Второй войны с Нильфгаардом, была оккупирована и почти полностью разрушена. По всему Северу бытует мнение, что каждый ривиец является вором. Лирия известна военной подготовкой стрелковых подразделений. Считается, что там воспитывают лучших арбалетчиков на свете. Основой верований жителей королевства является Культ богини Мелитэле, но, как и в большинстве королевств Севера, жители Лирии и Ривии верят и чтут также силу Вечного Огня, Креве и Фрейю. Объединённое королевство не имеет выхода к морю, но получает большую прибыль от торговли с другими государствами и выгодного расположения на важных торговых путях. Имеются торговые связи с Махакамом и другими государствами Севера.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Lyria-i-Rivia-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Lyria-i-Rivia.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Skellige-1') || region == document.getElementById('Skellige-2') ||
                region == document.getElementById('Skellige-3') || region == document.getElementById('Skellige-4') ||
                region == document.getElementById('Skellige-5') || region == document.getElementById('Skellige-6') ||
                region == document.getElementById('Skellige-7')) {
                title.innerText = 'Острова Скеллиге';
                img.src = 'media/Skellige.png';
                picture.append(img);
                content.innerText = "Горный архипелаг расположен недалеко от побережья Цинтры, их разделяет Бездна Седнина. Архипелаг состоит из двадцати островов, самый крупный из которых зовётся Ард Скеллиг. На нём расположена столица королевства — Каэр Трольде.    Экономика Скеллиге из-за суровых климатических условий и постоянных клановых междоусобиц развита слабо и разобщена, поэтому большая часть дохода идёт от морских грабежей. Тем не менее, на Ард Скеллиге имеются залежи серебра, и местными жителями осуществлялись попытки разработки этих месторождений. Островитяне занимаются преимущественно ремесленным трудом, а также скотоводством и добычей жемчуга. Аграрное производство из-за низкой плодородности почвы практически отсутствует. Весомую долю в жизни каждого человека на архипелаге занимает религия, а именно — почитание богини Фрейи. На острове Хиндарсфьялл расположена священная роща Гиндар. Жрецы играют большую роль в повседневной жизни архипелага. Кроме того, островитяне верят в легендарного героя Хеймдалля, от сыновей которого якобы произошли шесть из семи кланов. Также жители Скеллиге верят в легенду о Нагльфаре — драккаре из ногтей мертвецов из Морхёгга, который везёт Воинство Тьмы на битву со Светом.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Skellige-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Skellige.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Kerack')) {
                title.innerText = 'Керак';
                img.src = 'media/Kerack.png';
                picture.append(img);
                content.innerText = "Хоть Керак формально и является независимым королевством, де-факто оно испытывает огромное влияние со стороны Темерии. Основой его экономики и культуры является земледелие, хотя королевство получает прибыль в том числе с торговли и деревообрабатывающей промышленности. Значительная часть населения Керака, дабы избавиться от нищеты выбирает путь наемников.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Kerack-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Kerack.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Cidaris')) {
                title.innerText = 'Цидарис';
                img.src = 'media/Cidaris.png';
                picture.append(img);
                content.innerText = "Располагающееся на берегу Великого моря королевство в основном получает прибыль от продажи его даров. В стране весьма развито рыболовство, добываются янтарь и жемчуг. В крупных городах расположены известные на все северные королевства порты. Наряду с добычей морепродуктов территория королевства славится и своими виноградниками. Вино, экспортируемое в другие королевства, хоть и немного уступает сортам из Туссента, но тоже весьма популярно. Как и в остальных северных королевствах, тут развиты культы пророка Лебеды, Мелитэле и Вечного огня.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Cidaris-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Cidaris.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Aedirn')) {
                title.innerText = 'Аэдирн';
                img.src = 'media/Aedirn.png';
                picture.append(img);
                content.innerText = "Одно из крупнейших и богатейших государств севера, славящееся своими обширными залежами полезных ископаемых, сетью дорог и экономикой, основу которой составляют металлургические заводы и ткацкие фабрики. Также на территории Аэдирна находится Дол Блатанна – Долина цветов – свободное государство эльфов. Жители этого государства преимущественно образованные и культурные, со свойственным им снобизмом. Помимо этого, многие здесь не любят нелюдей по религиозным причинам. В основном это приверженность к культу Вечного Огня. Также здесь популярна вера в богиню Мелитэле, появившаяся в результате слияния большинства культов, поклоняющихся своей богине плодородия; самая мирная религия северных королевств.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Aedirn-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Aedirn.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Mahakam')) {
                title.innerText = 'Махакам';
                img.src = 'media/Mahakam.png';
                picture.append(img);
                content.innerText = "Государство под протекторатом Темерии, находящееся на одноимённом горном хребте и образующее изолированную область, населённую гномами и краснолюдами. Махакамом управляет староста Брувер Гоог, покои которого находятся под горой Карбон. В регионе действует собственный свод законов — Кодекс Штейгера, одним из пунктов которого является запрет на затопление и обрушение уже пробуренных шахт. Краснолюды очень трепетно относятся к соблюдению законов и жестоко наказывают всех, кто их нарушает, и особенно это касается чужеземцев. Махакам, некогда бывший небольшим шахтёрским городом, а благодаря усердию краснолюдов, разрабатывавших рудники и прокладывавших шахты, ставший огромным ремесленным центром, является крупнейшим экспортёром железа и стали в Северные королевства и Нильфгаардскую империю. Железные изделия из Махакама славятся своим качеством и считаются лучшими в мире. Кроме того, Махакам широко известен кузнечным и бронным делом, а также изготовлением оружия.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Mahakam-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Mahakam.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Novigrad')) {
                title.innerText = 'Новиград';
                img.src = 'media/Novigrad.png';
                picture.append(img);
                content.innerText = "Город-государство и самое большое человеческое поселение в Северных королевствах, расположенное в дельте реки Понтар на территории королевства Редания. Имеет статус «Вольного города» и является вассалом реданской короны, в связи с чем перед иерархом становится ряд обязательств, прописанных в акте об основании Вольного Города Новиграда 1065 года. Поскольку Новиград является вольным городом и формально не зависит от Редании, он имеет собственную активно развитую экономику, основой которой, по всей видимости, являются многочисленные мануфактуры, морская и внутренняя торговля, а также прибыль с денежного оборота и банковских операций. Отдельной сферой экономики вольного города является теневое предпринимательство, криминальный бизнес и коррупция. Поскольку в Новиграде процветает преступность и различного рода незаконный промысел, немалую прибыль преступники получают с подпольного казино и бойцовской арены, а также осуществляют различного рода криминальную деятельность. ";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Novigrad-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Novigrad.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Kaedwen')) {
                title.innerText = 'Каэдвен';
                img.src = 'media/Kaedwen.png';
                picture.append(img);
                content.innerText = "Королевство известно своим суровым, холодным климатом, обширными хвойными лесами, а также своей мужской магической академией в городе Бан Ард. Большое влияние на культуру Каэдвена оказали Старшие расы — в частности, эльфы. Многие названия населённых пунктов сохранились ещё с древних времён, но, несмотря на это, в королевстве всячески ущемляются права нелюдей. На территории Каэдвена находится знаменитая школа ведьмаков — крепость Каэр Морхен. В стране распространены популярные религии Северных королевств. Поскольку королевство славится своими густыми и обширными лесами, оно имеет развитую деревообрабатывающую промышленность, а также в королевстве ведётся интенсивная добыча дикого зверя и дичи. Синие Горы, являются кладезью различных полезных ископаемых, так что металлургия тоже является развитой отраслью промышленности страны.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Kaedwen-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Kaedwen.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Redania-1') || region == document.getElementById('Redania-2') ||
                region == document.getElementById('Redania-3')) {
                title.innerText = 'Редания';
                img.src = 'media/Redania.png';
                picture.append(img);
                content.innerText = "Редания является одним из самых богатых и экономически развитых государств Севера, уступая, вероятно, лишь Ковиру и Повиссу и Темерии. В Редании процветает сельское хозяйство и мануфактурное производство. Отдельной статьёй доходов государства является морская и сухопутная торговля. Также большую прибыль приносят торговые пошлины от Новиграда. В Редании процветает и финансовая деятельность, а благодаря Оксенфуртской академии в Редании живёт и работает большое число учёных и исследователей, что, вероятно, положительно сказывается на внедрении инноваций в науке, технике и экономике в целом.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Redania-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Redania.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Caingorn')) {
                title.innerText = 'Каингорн';
                img.src = 'media/Caingorn.png';
                picture.append(img);
                content.innerText = "Княжество, а ранее королевство к северу от реки Браа, которое входило в состав Хенгфорской Лиги. Здесь и находилась ее столица. “По закону Каингорна право наследования титулов и имений имеют и женщины. Старший ребёнок, будь он мужского или женского пола, получает все права на наследство. Кое-кто из младших сыновей пытается обойти этот закон, ссылаясь на традиции других королевств, но закон есть закон, и именно он определяет существующий порядок вещей.” – “Ведьмак, дополнение “Цена нейтралитета”.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Caingorn-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Caingorn.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Malleore')) {
                title.innerText = 'Маллеора';
                img.src = 'media/Malleore.png';
                picture.append(img);
                content.innerText = "Небольшое княжество, которое находилось в составе Хенгфорской Лиги. Согласно первому Эксетерскому трактату княжество Маллеора фактически вошла в состав королевства Ковир и Повисс, хотя его титулярным королём становился король Каэдвена Бенда. В начале XIII века после смерти короля Балдуина Тиссена королевство Ковир и Повисс ослабло и распалось, в результате чего Маллеора получила независимость. В середине XIII века мужская линия местной княжеской династии пресеклась, в связи с чем Недамир, правитель соседнего Каингорна, попытался присоединить Маллеору, женившись на дочери последнего правителя. Местная аристократия опасалась этого. Решение было найдено — маллеорцы откопали где-то старое пророчество, согласно которому митра и рука девушки положены тому, кто победит дракона. Он, конечно, мог победить маллеорское войско, но в это же время в Голополье появился золотой дракон, и Недамир решил испытать удачу. Однако ему не удалось убить дракона, а потому вскоре он силой захватывает Маллеору, а юную княжну берёт себе в жёны.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Malleore-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Malleore.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Creyden')) {
                title.innerText = 'Крейден';
                img.src = 'media/Creyden.png';
                picture.append(img);
                content.innerText = "Бывший когда-то частью Восточной Мархии Ковира, затем перешедшее под власть Каэдвена, а затем, княжество входило в Хенгфорскую Лигу. До захвата Недамиром, княжеством правил князь Фредефальк. После смерти Недамира, княжество было присоединено Танкредом Тиссеном к Ковиру.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Creyden-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Creyden.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Kovir-i-Poviss-1') || region == document.getElementById('Kovir-i-Poviss-2') ||
                region == document.getElementById('Kovir-i-Poviss-3') || region == document.getElementById('Kovir-i-Poviss-4') ||
                region == document.getElementById('Kovir-i-Poviss-5') || region == document.getElementById('Kovir-i-Poviss-6')) {
                title.innerText = 'Ковир и Повисс';
                img.src = 'media/Kovir-i-Poviss.png';
                picture.append(img);
                content.innerText = "Ковир и Повисс — самое богатое королевство Севера с очень развитой экономикой. Здесь развита добыча металлических руд (в основном, драгоценных), соли, стекла, но главный источник богатств королевства — золото. Государство ведёт масштабную торговлю с соседями, что, конечно, приносит немало денег в королевскую казну. Большинство стран Севера зависит от поставок Ковира и Повисса; стоит также отметить, что качество товаров королевства является довольно высоким, а оружейное искусство уступает разве что Махакаму. Ковир воспитал многих известных менестрелей, поэтов, государственных деятелей, полководцев. Здесь находятся базы торговых гильдий богатейших купцов и ремесленников. Также в этих краях родились и развивали свои способности знаменитые чародеи и чародейки, а ковирские разведчики, по распространённому мнению, являются одними из лучших в мире. Жители королевства повсеместно почитают пророка Лебеду.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Kovir-i-Poviss-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Kovir-i-Poviss.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
            if (region == document.getElementById('Temeria')) {
                title.innerText = 'Темерия';
                img.src = 'media/Temeria.png';
                picture.append(img);
                content.innerText = "Одно из самых крупных и могущественных королевств Севера, имеющее важное как стратегическое, так и политическое значение. За последние годы это могучее королевство приобрело ещё более значительное влияние благодаря правлению короля Фольтеста. Темерию населяют не только люди, но и краснолюды, эльфы, гномы и дриады. Из-за выгодного географического положения — Темерия находится на пересечении нескольких торговых сухопутных путей — государство получает немалую прибыль от торговли. Темерия поддерживается в основном высокоразвитым сельским хозяйством, животноводством и пищевой промышленностью, а также специализируется на производстве различных продуктов и товаров, на торговле и добыче ценных минералов, руд и драгоценных металлов, в основном из гор Махакама. Так как Махакам официально входит в состав королевства, это, конечно, даёт Темерии большую долю в добыче драгоценных металлов и производстве высококачественных доспехов. Так что страна производит все виды товаров и продуктов самостоятельно. Население Темерии в большинстве своём достаточно вежливо, религиозно и богобоязненно, но не признают представителей Старших Народов. Официальными религиями королевства являются Культ богини Мелитэле и вера в Вечный Огонь. В Темерии так же находится обитель и несколько командорств Ордена Пылающей Розы.";
                img.id = 'current-img';
                buttonContainer.style.display = 'block';
                changeBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        currentImg.src = 'media/Temeria-Flag.png';
                        changeBtn.style.display = 'none';
                        restoreBtn.style.display = 'block';
                    }
                });
                restoreBtn.addEventListener('click', function() {
                    var currentImg = document.getElementById('current-img');
                    if (currentImg) {
                        img.src = 'media/Temeria.png';
                        changeBtn.style.display = 'block';
                        restoreBtn.style.display = 'none';
                    }
                });
            }
        }
    });
    
    // sidebar.addEventListener('transitionend', function(e) {
    //     if (!sidebar.classList.contains('show')) {
    //         changeBtn.style.display = "none";
    //         restoreBtn.style.display = "none"; // Скрываем кнопку при закрытии сайдбара
    //     }
    // });

    changeBtn.addEventListener('click', function() {
        sidebar.classList.add('show');
        restoreBtn.style.display = "block"; // Показываем кнопку при открытии сайдбара
    });

    function addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in elem) {
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in elem) {
          elem.addEventListener("mousewheel", handler);
        } else {
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else {
        elem.attachEvent("onmousewheel", handler);
      }
    }

    var scale = 1;
    var originalScale = 1;
    var isDragging = false;
    var dragStartX = 0;
    var dragStartY = 0;
    var dragOffsetX = 0;
    var dragOffsetY = 0;

    addOnWheel(map, function(e) {
      var delta = e.deltaY || e.detail || e.wheelDelta;

      var rect = map.getBoundingClientRect();
      var mouseX = e.clientX - rect.left;
      var mouseY = e.clientY - rect.top;

      var relativeX = mouseX / map.offsetWidth;
      var relativeY = mouseY / map.offsetHeight;

      if (delta < 0) {
        scale += 0.05;
        scale = Math.min(scale, originalScale * 2);
      } else {
        scale -= 0.05;
        scale = Math.max(scale, originalScale);
      }

      var newMouseX = relativeX * map.offsetWidth;
      var newMouseY = relativeY * map.offsetHeight;

      var deltaX = newMouseX - mouseX;
      var deltaY = newMouseY - mouseY;

      map.style.transformOrigin = relativeX * 100 + "% " + relativeY * 100 + "%";
      map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ') translate(' + deltaX + 'px, ' + deltaY + 'px)';

      e.preventDefault();
    });

    map.addEventListener("mousedown", function(e) {
      if (e.button === 0) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragOffsetX = 1;
        dragOffsetY = 1;
      }
    });

    map.addEventListener("mousemove", function(e) {
      if (isDragging) {
        var dragX = e.clientX - dragStartX;
        var dragY = e.clientY - dragStartY;

        map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ') translate(' + (dragX + dragOffsetX) + 'px, ' + (dragY + dragOffsetY) + 'px)';
      }
    });

    map.addEventListener("mouseup", function(e) {
      if (e.button === 0) {
        isDragging = false;
        dragOffsetX += e.clientX - dragStartX;
        dragOffsetY += e.clientY - dragStartY;
      }
    });

    map.addEventListener("mouseleave", function(e) {
      if (isDragging) {
        isDragging = false;
        dragOffsetX += e.clientX - dragStartX;
        dragOffsetY += e.clientY - dragStartY;
      }
    });

    originalScale = parseFloat(getComputedStyle(map).getPropertyValue('transform').match(/\d+(\.\d+)?/)[0]);

});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    title.innerText = "";
    picture.innerText = "";
    content.innerText = "";
    sidebar.classList.remove('show');
  }
});

