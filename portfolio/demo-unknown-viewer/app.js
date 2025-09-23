async function loadCSV(url){
  const res = await fetch(url, {cache:"no-store"});
  if(!res.ok) throw new Error("CSVを取得できません: " + res.status);
  const text = await res.text();
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(",");
  const rows = lines.map(line=>{
    const cols = line.split(","); // 本テンプレはカンマ未使用の想定（;は含む）
    const o = {};
    headers.forEach((h,i)=>o[h]= (cols[i]??"").trim());
    return o;
  });
  return {headers, rows};
}

function renderTable(headers, rows){
  const thead = document.querySelector("#grid thead");
  const tbody = document.querySelector("#grid tbody");
  thead.innerHTML = "<tr>"+headers.map(h=>`<th>${h}</th>`).join("")+"</tr>";
  tbody.innerHTML = rows.map(r=>{
    return "<tr>"+headers.map(h=>`<td>${(r[h]||"").replace(/\|/g,"<br>")}</td>`).join("")+"</tr>";
  }).join("");
}

async function refresh(){
  const base = location.pathname.replace(/portfolio\/demo-unknown-viewer\/.*$/,"");
  const csvRel = "../../templates/R_ledger.csv"; // リポ内相対パス
  const {headers, rows} = await loadCSV(csvRel);
  const state = document.getElementById("stateFilter").value;
  const filtered = state ? rows.filter(r => (r["状態"]||"").toLowerCase() === state) : rows;
  renderTable(headers, filtered);
}

document.getElementById("reload").addEventListener("click", refresh);
document.getElementById("stateFilter").addEventListener("change", refresh);
refresh().catch(err=>{
  const tbody = document.querySelector("#grid tbody");
  tbody.innerHTML = `<tr><td>読み込みエラー：${err.message}</td></tr>`;
});
