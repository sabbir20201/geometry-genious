// common function
function inputFieldFunction(inputField) {
  const inputFieldNumber = document.getElementById(inputField);
  const inputFieldString = inputFieldNumber.value;
  const input = parseFloat(inputFieldString);
  inputFieldNumber.value = " ";
  return input;
}

// set element function
function setElement(textId, result) {
  const element = document.getElementById(textId);
  element.innerText = result;
}

// common error handling function
function errorHandling(base, height) {
  if (isNaN(base) || isNaN(height)) {
    alert("Please enter a number");
    return true;
  } else {
    return false;
  }
}
// 1
function triangleBtn() {
  const triangleBase = inputFieldFunction("triangle-base");
  const triangleHeight = inputFieldFunction("triangle-height");
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  if (errorHandling(triangleBase, triangleHeight)) {
    return;
  }

  setElement("triangle-area", triangleArea);
  addToCalculationArea("triangle", triangleArea);
}
// 2
function rectangleBtn() {
  const rectangleBase = inputFieldFunction("rectangle-base");
  const rectangleHeight = inputFieldFunction("rectangle-height");
  const rectangleArea = rectangleBase * rectangleHeight;

  setElement("rectangle-area", rectangleArea);
  addToCalculationArea("rectangle", rectangleArea);
}

// 3
function parallelogramBtn() {
  const parallelogramBase = inputFieldFunction("Parallelogram-base");
  const parallelogramHeight = inputFieldFunction("Parallelogram-height");
  const parallelogramBtnArea = parallelogramBase * parallelogramHeight;
  if (errorHandling(parallelogramBase, parallelogramHeight)) {
    return;
  }
  setElement("parallelogram-area", parallelogramBtnArea);
  addToCalculationArea("parallelogram", parallelogramBtnArea);
}

// add calculation area 
function addToCalculationArea(areaType, area) {
  console.log(areaType, area);
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("P");
  p.classList.add('my-4')
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> 
  <button class="btn btn-sm btn-success">Convert<button>`
  calculationEntry.appendChild(p);
}
