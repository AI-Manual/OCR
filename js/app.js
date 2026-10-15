const pdfFile=document.getElementById("pdfFile");

const selectBtn=document.getElementById("selectBtn");

const analyzeBtn=document.getElementById("analyzeBtn");

const fileName=document.getElementById("fileName");

selectBtn.onclick=()=>{

    pdfFile.click();

};

pdfFile.onchange=()=>{

    if(pdfFile.files.length===0){

        return;

    }

    fileName.textContent=pdfFile.files[0].name;

    analyzeBtn.disabled=false;

};

analyzeBtn.onclick=()=>{

    alert("次のStepでOCR処理を追加します。");

};
