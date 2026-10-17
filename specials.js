'use strict';
const specialUnlocks={shocktrooper:2,raider:4,juggernaut:6,revenant:8,leviathan:10};
function installSpecialDefinitions(){Object.assign(defs,{
 shocktrooper:{name:'Arc Shock Trooper',exclusive:true,facility:'barracks',infantry:true,cost:240,hp:220,speed:2.6,damage:24,range:5.5,time:11,cooldown:.85,icon:'ϟ'},
 raider:{name:'Wraith Raider',exclusive:true,facility:'factory',cost:450,hp:420,speed:3.8,damage:34,range:7,time:14,cooldown:.8,icon:'◇'},
 juggernaut:{name:'Siege Juggernaut',exclusive:true,facility:'factory',cost:1100,hp:1600,speed:1.35,damage:145,range:13,time:28,cooldown:3,icon:'▰'},
 revenant:{name:'Revenant Gunship',exclusive:true,facility:'airfield',air:true,altitude:65,cost:1250,hp:1050,speed:3.2,damage:100,range:10,time:26,cooldown:1.8,icon:'✣'},
 leviathan:{name:'Leviathan Hover Fortress',exclusive:true,boss:true,amphibious:true,facility:'factory',cost:6500,hp:16000,speed:.95,damage:460,range:18,time:75,cooldown:3.2,icon:'◆'}
 });Object.assign(weaponVisuals,{
 shocktrooper:{kind:'arc-discharge',color:'#a3acff',width:3,life:.3,pitch:880,wave:'sawtooth'},
 raider:{kind:'wraith-bolt',color:'#f49bff',width:3,life:.26,pitch:640,wave:'sine'},
 juggernaut:{kind:'juggernaut-barrage',color:'#ff9c45',width:4,life:1,pitch:48,wave:'sawtooth'},
 revenant:{kind:'revenant-plasma',color:'#ff616e',width:4,life:.4,pitch:130,wave:'square'},
 leviathan:{kind:'leviathan-warhead',color:'#e6a0ff',width:6,life:1,pitch:32,wave:'sawtooth'}
 });}
function specialRoster(){return Object.keys(specialUnlocks).filter(t=>activeLevel!==null&&specialUnlocks[t]<=activeLevel);}
function exclusiveProduction(b){return b.team>0?specialRoster().filter(t=>defs[t].facility===b.type&&(!defs[t].boss||b.team===1)):[];}
function chooseSpecialProduction(team,ai,available){const army=units.filter(u=>u.team===team),count=t=>army.filter(u=>u.type===t).length+ai.queue.filter(q=>q.type===t).length;const boss=available.includes('leviathan')&&count('leviathan')===0&&ai.money>=defs.leviathan.cost;if(boss)return 'leviathan';const missing=available.filter(t=>defs[t].exclusive&&!defs[t].boss&&count(t)===0&&ai.money>=defs[t].cost);return missing.at(-1)||null;}
function establishCampaignEnemies(){if(activeLevel===null)return;for(const key of Object.keys(aiStates)){const team=+key;for(const type of ['refinery','plant','barracks',...(activeLevel>=4?['plant','factory']:[]),...(activeLevel>=7?['plant','airfield']:[]),...(activeLevel>=9?['marina']:[])]){if(!aiConstruct(team,type))continue;const b=buildings.at(-1);b.buildRemaining=0;for(const t of trees)if(dist(t,b)<defs[type].size+1)t.crushed=true;}invalidateNavigation();} }
function bossSpawn(b){refreshNavigation();const probe={type:'leviathan'};for(let r=4;r<=12;r++)for(let a=0;a<24;a++){const p={x:Math.round(b.x+Math.cos(a*Math.PI/12)*r),y:Math.round(b.y+Math.sin(a*Math.PI/12)*r)};if(!blocked(p.x,p.y,probe)&&!units.some(u=>dist(u,p)<2))return p;}return null;}
function notifySpecialBorn(u){if(u.type==='leviathan'){u.target={x:14,y:16};u.attackMove=true;notify('⚠ LEVIATHAN DEPLOYED — enemy hover fortress inbound!');}}
function specialSplash(a,b,amount){if(!['shocktrooper','revenant'].includes(a.type))return;for(const other of units)if(other!==b&&other.team!==a.team&&other.hp>0&&dist(other,b)<(a.type==='shocktrooper'?1.6:2))damageFeedback(a,other,amount*.35);}
function specialUnitModel(o,color,light,metal){const x=o.x,y=o.y,glow='#d79bff';
 if(o.type==='shocktrooper'){infantryModel(o,'#62528e','#c5b5ff',metal);for(let side of [-1,1])for(let i=0;i<5;i++)box(x-.12,y+side*.16,.08,.055,1.1,i%2?glow:metal,9+i*1.3);box(x+.36,y,.35,.12,3,'#b4acff',10);return;}
 if(o.type==='revenant'){const z=65+Math.sin(time*2)*2;for(let i=0;i<22;i++)box(x,y-1.1+i*.1,.3+Math.sin(i/22*Math.PI)*.7,.095,6,color,z);for(let side of [-1,1]){box(x+side*.85,y,.65,1.6,5,'#49374f',z);for(let i=0;i<14;i++)box(x+side*.85,y-.65+i*.1,.5,.07,2,i%3?metal:'#ff6c92',z+6);box(x+side*1.1,y-.9,.15,.65,3,light,z);box(x+side*.6,y+.7,.3,.35,3,'#ff827f',z+2);}box(x,y-.75,.45,.5,4,'#efacda',z+7);return;}
 if(o.type==='raider'){scoutBuggyModel(o,'#68466c',glow,metal);for(let side of [-1,1]){box(x+side*.4,y-.1,.08,.7,2,glow,9);box(x+side*.2,y-.5,.08,.4,3,'#eac3ff',17);}return;}
 if(o.type==='juggernaut'){for(let side of [-1,1]){box(x+side*.75,y,.45,2.4,8,'#253340');for(let i=0;i<36;i++)box(x+side*.75,y-1.15+i*.065,.47,.035,2,metal,8);}box(x,y,1.25,2.1,12,'#6b5965',8);for(let i=0;i<9;i++)for(let j=0;j<16;j++)box(x+(i-4)*.13,y+(j-7.5)*.12,.1,.09,1,(i+j)%4?color:metal,21);for(let side of [-1,1])for(let i=0;i<8;i++){box(x+side*.35,y-.8+i*.2,.28,.17,8,'#7d6662',23);box(x+side*.35,y-.87+i*.2,.19,.025,4,'#ffb86c',25);}return;}
 // The final boss has a broad hover hull, layered armor, four launch racks and a rotating command radar.
 const lift=4+Math.sin(time*2)*.6;
 for(let i=0;i<62;i++){const yoff=-3.1+i*.1,w=2.6+Math.sin((i+.5)/62*Math.PI)*1.7;box(x,y+yoff,w,.095,11,'#3e3b57',lift);box(x,y+yoff,w*.92,.095,3,color,lift+11);}
 for(let side of [-1,1]){box(x+side*2,y,.5,4.7,8,'#263344',lift+3);for(let i=0;i<42;i++){box(x+side*2.25,y-2.1+i*.1,.04,.075,3,i%3?'#bd85f3':'#e9d5ff',lift+3);box(x+side*1.9,y-2.1+i*.1,.3,.07,2,metal,lift+12);}for(let section of [-1.3,1.3]){box(x+side*1.2,y+section,.9,1.3,9,'#6d536d',lift+15);for(let i=0;i<4;i++)for(let j=0;j<6;j++){box(x+side*1.2+(i-1.5)*.19,y+section+(j-2.5)*.18,.15,.14,2,'#243546',lift+24);box(x+side*1.2+(i-1.5)*.19,y+section+(j-2.5)*.18,.07,.07,1,o.firingUntil>time?'#ffd5ff':glow,lift+26);}}}
 box(x,y,1.4,2,22,'#6c607e',lift+16);box(x,y-.8,1.5,.08,7,'#d7a6f7',lift+28);for(let i=0;i<12;i++)box(x-.66+i*.12,y-.86,.025,.05,7,metal,lift+28);for(let i=0;i<24;i++){const a=i*Math.PI/12;box(x+Math.cos(a)*.5,y+Math.sin(a)*.5,.1,.1,3,i%2?glow:'#f7dcff',lift+39);}box(x,y,.08,.08,22,metal,lift+39);for(let i=-10;i<=10;i++)box(x+Math.cos(time*.8)*i*.08,y+Math.sin(time*.8)*i*.08,.07,.07,3,glow,lift+55);
 for(let i=0;i<26;i++)for(let j=0;j<28;j++)if(Math.abs(i-12.5)>.8&&Math.abs(j-13.5)>9)box(x+(i-12.5)*.145,y+(j-13.5)*.2,.11,.14,1,(i+j)%5?color:metal,lift+15);
}
function updateBossUI(){const boss=units.find(u=>u.type==='leviathan'&&u.hp>0);const job=Object.entries(aiStates).flatMap(([team,ai])=>ai.queue.map(q=>({...q,team}))).find(q=>q.type==='leviathan');const show=activeLevel===10&&(boss||job);$('#bossHUD').hidden=!show;if(!show)return;$('#bossTitle').textContent=boss?'⚠ LEVIATHAN HOVER FORTRESS':'⚠ ENEMY BUILDING LEVIATHAN';$('#bossStatus').textContent=boss?Math.ceil(boss.hp).toLocaleString()+' / '+Math.ceil(boss.max).toLocaleString()+' armor':Math.ceil(defs.leviathan.time-job.progress)+'s until deployment';$('#bossBar').style.width=(boss?boss.hp/boss.max:job.progress/defs.leviathan.time)*100+'%';}
