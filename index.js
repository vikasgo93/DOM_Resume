const firstOutDiv = document.createElement("div");
firstOutDiv.classList.add("container");
document.body.appendChild(firstOutDiv);

const firstInDiv = document.createElement("div")
firstInDiv.setAttribute("id", "head");
firstOutDiv.appendChild(firstInDiv);

const imgCont = document.createElement("div");
imgCont.setAttribute("id", "img-container");
firstInDiv.appendChild(imgCont);

const decorationDiv = document.createElement("div");
decorationDiv.setAttribute("id", "decoration");
imgCont.appendChild(decorationDiv);

const imagePng = document.createElement("img");
imagePng.setAttribute("src","img_avatar.png");
decorationDiv.appendChild(imagePng);

const personName = document.createElement("div");
personName.setAttribute("id","name");
firstInDiv.appendChild(personName);

const head1Name = document.createElement("h1");
head1Name.innerText = "Brian Dubey";
personName.appendChild(head1Name);

const whiteBar = document.createElement("div");
whiteBar.setAttribute("id","whitebar");
firstOutDiv.appendChild(whiteBar);

const addBar = document.createElement("div");
addBar.setAttribute("id","addBar");
firstOutDiv.appendChild(addBar);

const address = document.createElement("div");
firstOutDiv.appendChild(address);

const addressPara = document.createElement("p");
addressPara.setAttribute("id","address");
addressPara.innerText = "N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume | www.kickresume.com";
address.appendChild(addressPara);

const horizont = document.createElement("hr");
firstOutDiv.appendChild(horizont);

const rowOne = document.createElement("div");
rowOne.setAttribute("class", "row")
firstOutDiv.appendChild(rowOne);

const columnOne = document.createElement("div");
columnOne.setAttribute("class", "column")
rowOne.appendChild(columnOne);


const profilePerson = document.createElement("div");
profilePerson.setAttribute("id","profile");
columnOne.appendChild(profilePerson);

const shapeOne = document.createElement("div");
shapeOne.setAttribute("class", "circle");
profilePerson.appendChild(shapeOne);

const spanIcon = document.createElement("span");
spanIcon.setAttribute("class", "icon");
shapeOne.appendChild(spanIcon);

const awesomeIconOne = document.createElement("i");
awesomeIconOne.setAttribute("class","fa fa-user-circle");
spanIcon.appendChild(awesomeIconOne);

const head2Prof = document.createElement("h2");
profilePerson.appendChild(head2Prof);

const boldNameProf = document.createElement("b");
boldNameProf.innerText = "Profile";
head2Prof.appendChild(boldNameProf);

const profilePara = document.createElement("p");
profilePara.innerText = "Sunt aute dolor non mollit cupidatat ut ex culpa cupidatat laborum laboris elit irure non mollit velit mollit";
profilePerson.appendChild(profilePara);

const skills = document.createElement("div");
skills.setAttribute("id", "skills");
columnOne.appendChild(skills);

const shapeTwo = document.createElement("div");
shapeTwo.setAttribute("class", "circle");
skills.appendChild(shapeTwo);

const spanIconOne = document.createElement("span");
spanIconOne.setAttribute("class", "icon");
shapeTwo.appendChild(spanIconOne);

const awesomeIconTwo = document.createElement("i");
awesomeIconTwo.setAttribute("class","fa fa-code");
spanIconOne.appendChild(awesomeIconTwo);

const head2Skills = document.createElement("h2");
skills.appendChild(head2Skills);

const boldNameSkills = document.createElement("b");
boldNameSkills.innerText = "Skills";
head2Skills.appendChild(boldNameSkills);


const rangeBars = document.createElement("div");
rangeBars.setAttribute("class", "range-bars");
skills.appendChild(rangeBars);

const tableOne = document.createElement("table");
rangeBars.appendChild(tableOne);

const tableBodyOne = document.createElement("tbody");
tableOne.appendChild(tableBodyOne);

const tRowOne = document.createElement("tr");
tableBodyOne.appendChild(tRowOne);

const tRowOneCol = document.createElement("td");
tRowOneCol.setAttribute("colspan", "2");
tRowOneCol.setAttribute("class", "headRow");
tRowOne.appendChild(tRowOneCol);

const boldHeadRow = document.createElement("b");
boldHeadRow.innerText = "Technical Skills";
tRowOneCol.appendChild(boldHeadRow);

//TableRows

const tRowTwo = document.createElement("tr");
tableBodyOne.appendChild(tRowTwo);

const tRowTwoColOne = document.createElement("td");
tRowTwo.appendChild(tRowTwoColOne);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "javascript");
labelOne.innerText="Javascript";
tRowTwoColOne.appendChild(labelOne);

const tRowTwoColTwo = document.createElement("td");
tRowTwo.appendChild(tRowTwoColTwo);

const inputOne = document.createElement("input");
inputOne.setAttribute("type", "range");
inputOne.setAttribute("id", "javascript");
inputOne.setAttribute("min", "1");
inputOne.setAttribute("max", "100");
inputOne.setAttribute("value", "50");
tRowTwoColTwo.appendChild(inputOne);

//ThridRow
const tRowThree = document.createElement("tr");
tableBodyOne.appendChild(tRowThree);

const tRowThreeColOne = document.createElement("td");
tRowThree.appendChild(tRowThreeColOne);

const labelTwo = document.createElement("label");
labelTwo.setAttribute("for", "html");
labelTwo.innerText="HTML";
tRowThreeColOne.appendChild(labelTwo);

const tRowThreeColTwo = document.createElement("td");
tRowThree.appendChild(tRowThreeColTwo);

const inputTwo = document.createElement("input");
inputTwo.setAttribute("type", "range");
inputTwo.setAttribute("id", "html");
inputTwo.setAttribute("min", "1");
inputTwo.setAttribute("max", "100");
inputTwo.setAttribute("value", "50");
tRowThreeColTwo.appendChild(inputTwo);


//FourthRow
const tRowFour = document.createElement("tr");
tableBodyOne.appendChild(tRowFour);

const tRowFourColOne = document.createElement("td");
tRowFour.appendChild(tRowFourColOne);

const labelThree = document.createElement("label");
labelThree.setAttribute("for", "css");
labelThree.innerText="CSS";
tRowFourColOne.appendChild(labelThree);

const tRowFourColTwo = document.createElement("td");
tRowFour.appendChild(tRowFourColTwo);

const inputThree = document.createElement("input");
inputThree.setAttribute("type", "range");
inputThree.setAttribute("id", "css");
inputThree.setAttribute("min", "1");
inputThree.setAttribute("max", "100");
inputThree.setAttribute("value", "50");
tRowFourColTwo.appendChild(inputThree);


//FifthRow

const tRowFive = document.createElement("tr");
tableBodyOne.appendChild(tRowFive);

const tRowFiveColOne = document.createElement("td");
tRowFive.appendChild(tRowFiveColOne);

const labelFour = document.createElement("label");
labelFour.setAttribute("for", "react");
labelFour.innerText="React";
tRowFiveColOne.appendChild(labelFour);

const tRowFiveColTwo = document.createElement("td");
tRowFive.appendChild(tRowFiveColTwo);

const inputFour = document.createElement("input");
inputFour.setAttribute("type", "range");
inputFour.setAttribute("id", "react");
inputFour.setAttribute("min", "1");
inputFour.setAttribute("max", "100");
inputFour.setAttribute("value", "50");
tRowFiveColTwo.appendChild(inputFour);


//SixthRow

const tRowSix = document.createElement("tr");
tableBodyOne.appendChild(tRowSix);

const tRowSixColOne = document.createElement("td");
tRowSix.appendChild(tRowSixColOne);

const labelFive = document.createElement("label");
labelFive.setAttribute("for", "redux");
labelFive.innerText="Redux";
tRowSixColOne.appendChild(labelFive);

const tRowSixColTwo = document.createElement("td");
tRowSix.appendChild(tRowSixColTwo);

const inputFive = document.createElement("input");
inputFive.setAttribute("type", "range");
inputFive.setAttribute("id", "redux");
inputFive.setAttribute("min", "1");
inputFive.setAttribute("max", "100");
inputFive.setAttribute("value", "50");
tRowSixColTwo.appendChild(inputFive);

//SeventhRow

const tRowSeven = document.createElement("tr");
tableBodyOne.appendChild(tRowSeven);

const tRowSevenColOne = document.createElement("td");
tRowSeven.appendChild(tRowSevenColOne);

const labelSix = document.createElement("label");
labelSix.setAttribute("for", "mongo");
labelSix.innerText="Mongo DB";
tRowSevenColOne.appendChild(labelSix);

const tRowSevenColTwo = document.createElement("td");
tRowSeven.appendChild(tRowSevenColTwo);

const inputSix = document.createElement("input");
inputSix.setAttribute("type", "range");
inputSix.setAttribute("id", "mongo");
inputSix.setAttribute("min", "1");
inputSix.setAttribute("max", "100");
inputSix.setAttribute("value", "50");
tRowSevenColTwo.appendChild(inputSix);

//Row Eight

const tRowEight = document.createElement("tr");
tableBodyOne.appendChild(tRowEight);

const tRowEightOneCol = document.createElement("td");
tRowEightOneCol.setAttribute("colspan", "2");
tRowEightOneCol.setAttribute("class", "headRow");
tRowEight.appendChild(tRowEightOneCol);

const boldHeadRowEight = document.createElement("b");
boldHeadRowEight.innerText = "Additional Skills";
tRowEightOneCol.appendChild(boldHeadRowEight);

//Row Nine
const tRowNine = document.createElement("tr");
tableBodyOne.appendChild(tRowNine);

const tRowNineColOne = document.createElement("td");
tRowNine.appendChild(tRowNineColOne);

const labelSeven = document.createElement("label");
labelSeven.setAttribute("for", "pm");
labelSeven.innerText="Product Management";
tRowNineColOne.appendChild(labelSeven);

const tRowNineColTwo = document.createElement("td");
tRowNine.appendChild(tRowNineColTwo);

const inputSeven = document.createElement("input");
inputSeven.setAttribute("type", "range");
inputSeven.setAttribute("id", "pm");
inputSeven.setAttribute("min", "1");
inputSeven.setAttribute("max", "100");
inputSeven.setAttribute("value", "50");
tRowNineColTwo.appendChild(inputSeven);

//TenthRow
const tRowTen = document.createElement("tr");
tableBodyOne.appendChild(tRowTen);

const tRowTenColOne = document.createElement("td");
tRowTen.appendChild(tRowTenColOne);

const labelEight = document.createElement("label");
labelEight.setAttribute("for", "rec");
labelEight.innerText="Recruitment";
tRowTenColOne.appendChild(labelEight);

const tRowTenColTwo = document.createElement("td");
tRowTen.appendChild(tRowTenColTwo);

const inputEight = document.createElement("input");
inputEight.setAttribute("type", "range");
inputEight.setAttribute("id", "rec");
inputEight.setAttribute("min", "1");
inputEight.setAttribute("max", "100");
inputEight.setAttribute("value", "50");
tRowTenColTwo.appendChild(inputEight);


//EleventhRow
const tRowEleven = document.createElement("tr");
tableBodyOne.appendChild(tRowEleven);

const tRowElevenColOne = document.createElement("td");
tRowEleven.appendChild(tRowElevenColOne);

const labelNine = document.createElement("label");
labelNine.setAttribute("for", "bd");
labelNine.innerText="Business Development";
tRowElevenColOne.appendChild(labelNine);

const tRowElevenColTwo = document.createElement("td");
tRowEleven.appendChild(tRowElevenColTwo);

const inputNine = document.createElement("input");
inputNine.setAttribute("type", "range");
inputNine.setAttribute("id", "bd");
inputNine.setAttribute("min", "1");
inputNine.setAttribute("max", "100");
inputNine.setAttribute("value", "50");
tRowElevenColTwo.appendChild(inputNine);


//TwelthRow

const tRowTwelve = document.createElement("tr");
tableBodyOne.appendChild(tRowTwelve);

const tRowTwelveColOne = document.createElement("td");
tRowTwelve.appendChild(tRowTwelveColOne);

const labelTen = document.createElement("label");
labelTen.setAttribute("for", "edit");
labelTen.innerText="Editing";
tRowTwelveColOne.appendChild(labelTen);

const tRowTwelveColTwo = document.createElement("td");
tRowTwelve.appendChild(tRowTwelveColTwo);

const inputTen = document.createElement("input");
inputTen.setAttribute("type", "range");
inputTen.setAttribute("id", "edit");
inputTen.setAttribute("min", "1");
inputTen.setAttribute("max", "100");
inputTen.setAttribute("value", "50");
tRowTwelveColTwo.appendChild(inputTen);



//Thirteenth Row

const tRowThriteen = document.createElement("tr");
tableBodyOne.appendChild(tRowThriteen);

const tRowThirteenColOne = document.createElement("td");
tRowThriteen.appendChild(tRowThirteenColOne);

const labelEleven = document.createElement("label");
labelEleven.setAttribute("for", "fr");
labelEleven.innerText="Fund Raising";
tRowThirteenColOne.appendChild(labelEleven);

const tRowThirteenColTwo = document.createElement("td");
tRowThriteen.appendChild(tRowThirteenColTwo);

const inputEleven = document.createElement("input");
inputEleven.setAttribute("type", "range");
inputEleven.setAttribute("id", "fr");
inputEleven.setAttribute("min", "1");
inputEleven.setAttribute("max", "100");
inputEleven.setAttribute("value", "50");
tRowThirteenColTwo.appendChild(inputEleven);


const breakOne = document.createElement("br");
columnOne.appendChild(breakOne);

const workExperience = document.createElement("div");
workExperience.setAttribute("id", "work experience");
columnOne.appendChild(workExperience);

//Icon for Work Experience:
const shapeThree = document.createElement("div");
shapeThree.setAttribute("class", "circle");
workExperience.appendChild(shapeThree);

const spanIconTwo = document.createElement("span");
spanIconTwo.setAttribute("class", "icon");
shapeThree.appendChild(spanIconTwo);

const awesomeIconThree = document.createElement("i");
awesomeIconThree.setAttribute("class","fa fa-briefcase");
spanIconTwo.appendChild(awesomeIconThree);

const head2WE = document.createElement("h2");
workExperience.appendChild(head2WE);

const boldNameWE = document.createElement("b");
boldNameWE.innerText = "Work Experience";
head2WE.appendChild(boldNameWE);

const weTable = document.createElement("table");
workExperience.appendChild(weTable);

const weTableBody = document.createElement("tbody");
weTable.appendChild(weTableBody);

const wRowOne = document.createElement("tr");
weTableBody.appendChild(wRowOne);

const wRowOneColOne = document.createElement("td");
wRowOne.appendChild(wRowOneColOne);

const boldColOne = document.createElement("b");
boldColOne.innerText = "Event Manager";
wRowOneColOne.appendChild(boldColOne);

const wRowOneColTwo = document.createElement("td");
wRowOneColTwo.innerText = "06/2014 - 01/2018";
wRowOne.appendChild(wRowOneColTwo);

const wRowTwo = document.createElement("tr");
weTableBody.appendChild(wRowTwo);

const wRowTwoColOne = document.createElement("td");
wRowTwoColOne.innerText = "Chennai, Ind";
wRowTwo.appendChild(wRowTwoColOne);

const unOrderedList = document.createElement("ul");
workExperience.appendChild(unOrderedList);

const listOne = document.createElement("li");
listOne.innerText = "Consequat non ad mollit veniam fugiat eiusmod consectetur amet reprehenderit ut in in velit cillum ad anim sunt.";
unOrderedList.appendChild(listOne);

const listTwo = document.createElement("li");
listTwo.innerText = "Tempor laborum commodo ad do occaecat dolor laborum tempor dolor.";
unOrderedList.appendChild(listTwo);

const listThree = document.createElement("li");
listThree.innerText = "Aliqua laboris ut anim ad dolore in exercitation velit in aliqua id ullamco sit dolor.";
unOrderedList.appendChild(listThree);


//Column2


const columnTwo = document.createElement("div");
columnTwo.setAttribute("class", "column1");
rowOne.appendChild(columnTwo);

const weTwo = document.createElement("div");
weTwo.setAttribute("class", "work experience");
columnTwo.appendChild(weTwo);

const shapeFour = document.createElement("div");
shapeFour.setAttribute("class", "circle");
weTwo.appendChild(shapeFour);

const spanIconThree = document.createElement("span");
spanIconThree.setAttribute("class", "icon");
shapeFour.appendChild(spanIconThree);

const awesomeIconFour = document.createElement("i");
awesomeIconFour.setAttribute("class","fa fa-briefcase");
spanIconThree.appendChild(awesomeIconFour);

const head2WEOne = document.createElement("h2");
weTwo.appendChild(head2WEOne);

const boldNameWEOne = document.createElement("b");
boldNameWEOne.innerText = "Work Experience";
head2WEOne.appendChild(boldNameWEOne);

//table
const weTableOne = document.createElement("table");
weTwo.appendChild(weTableOne);

const weTableBodyOne = document.createElement("tbody");
weTableOne.appendChild(weTableBodyOne);

const weRowOne = document.createElement("tr");
weTableBodyOne.appendChild(weRowOne);

const weRowOneColOne = document.createElement("td");
weRowOne.appendChild(weRowOneColOne);

const weboldColOne = document.createElement("b");
weboldColOne.innerText = "Community Relations Manager";
weRowOneColOne.appendChild(weboldColOne);

const weRowOneColTwo = document.createElement("td");
weRowOneColTwo.innerText = "06/2011 - 01/2014";
weRowOne.appendChild(weRowOneColTwo);

const weRowTwo = document.createElement("tr");
weTableBodyOne.appendChild(weRowTwo);

const weRowTwoColOne = document.createElement("td");
weRowTwoColOne.innerText = "Mumbai, Ind";
weRowTwo.appendChild(weRowTwoColOne);

const unOrderedListOne = document.createElement("ul");
weTwo.appendChild(unOrderedListOne);

const welistOne = document.createElement("li");
welistOne.innerText = "Consequat non ad mollit veniam fugiat eiusmod consectetur amet reprehenderit ut in in velit cillum ad anim sunt.";
unOrderedListOne.appendChild(welistOne);

const welistTwo = document.createElement("li");
welistTwo.innerText = "Tempor laborum commodo ad do occaecat dolor laborum tempor dolor.";
unOrderedListOne.appendChild(welistTwo);

const welistThree = document.createElement("li");
welistThree.innerText = "Aliqua laboris ut anim ad dolore in exercitation velit in aliqua id ullamco sit dolor.";
unOrderedListOne.appendChild(welistThree);


//Education Div
const educationDiv = document.createElement("div");
educationDiv.setAttribute("id", "education");
columnTwo.appendChild(educationDiv);

const shapeFive = document.createElement("div");
shapeFive.setAttribute("class", "circle");
educationDiv.appendChild(shapeFive);

const spanIconFour = document.createElement("span");
spanIconFour.setAttribute("class", "icon");
shapeFive.appendChild(spanIconFour);

const awesomeIconFive = document.createElement("i");
awesomeIconFive.setAttribute("class","fa fa-university");
spanIconFour.appendChild(awesomeIconFive);

const head2edu = document.createElement("h2");
educationDiv.appendChild(head2edu);

const boldNameEdu = document.createElement("b");
boldNameEdu.innerText = "Education";
head2edu.appendChild(boldNameEdu);

//table
const eduTable = document.createElement("table");
educationDiv.appendChild(eduTable);

const eduTableBody = document.createElement("tbody");
eduTable.appendChild(eduTableBody);

const eduRowOne = document.createElement("tr");
eduTableBody.appendChild(eduRowOne);

const eduRowOneColOne = document.createElement("td");
eduRowOne.appendChild(eduRowOneColOne);

const eduboldColOne = document.createElement("b");
eduboldColOne.innerText = "Engineering Immersion program";
eduRowOneColOne.appendChild(eduboldColOne);

const eduboldColTwo = document.createElement("td");
eduboldColTwo.innerText = "06/2018 - 12/2018";
eduRowOne.appendChild(eduboldColTwo);

const eduRowTwo = document.createElement("tr");
eduTableBody.appendChild(eduRowTwo);

const eduRowTwoColOne = document.createElement("td");
eduRowTwoColOne.innerText = "Bangalore, Ind";
eduRowTwo.appendChild(eduRowTwoColOne);

const eduPara = document.createElement("p");
eduPara.innerText = "Lorem ipsum voluptate magna cupidatat minim sed consectetur sed fugiat nulla sint.";
educationDiv.appendChild(eduPara);

const eduUnOrderedListOne = document.createElement("ul");
educationDiv.appendChild(eduUnOrderedListOne);

const edulistOne = document.createElement("li");
edulistOne.innerText = "Consequat non ad mollit veniam fugiat eiusmod consectetur amet reprehenderit ut in in velit cillum ad anim sunt.";
eduUnOrderedListOne.appendChild(edulistOne);

const edulistTwo = document.createElement("li");
edulistTwo.innerText = "Lorem ipsum eiusmod commodo id eu velit minim consequat nisi in commodo adipisicing ex eu. Nisi elit sunt dolor velit labore amet dolor dolor ut ut consequat exercitation sunt incididunt et";
eduUnOrderedListOne.appendChild(edulistTwo);

const edulistThree = document.createElement("li");
edulistThree.innerText = "Lorem ipsum sit occaecat culpa laboris sed et nulla eu aliqua consequat nulla culpa mollit anim consequat officia dolor.";
eduUnOrderedListOne.appendChild(edulistThree);


const edulistFour = document.createElement("li");
edulistFour.innerText = "Elit minim in do duis excepteur exercitation eiusmod veniam tempor id aute quis adipisicing cupidatat do adipisicing ut sit.";
eduUnOrderedListOne.appendChild(edulistFour);

const edulistFive = document.createElement("li");
edulistFive.innerText = "Lorem ipsum eiusmod sint ex duis qui ullamco consequat velit ut culpa sunt sunt. In magna dolor eu ea dolore velit dolore labore irure ea magna ad amet ullamco aliquip excepteur.";
eduUnOrderedListOne.appendChild(edulistFive);

