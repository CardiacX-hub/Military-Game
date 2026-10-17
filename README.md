# Ironwake Command — 3.1

A phone-friendly isometric browser RTS with procedural voxel graphics. Play at https://cardiacx-hub.github.io/Military-Game/.

## Run and validate

Node.js 18 or newer is required. Run `npm start`, then open port 3000. No runtime package installation is needed. `npm run check` validates the scripts and `npm test` exercises gameplay, navigation, economy, research, combat, naval rules and persistence.

## Start an operation

Choose from six faction colors, 0–3 opponents, and seven difficulties: Easy, Normal, Hard, Brutal, Nightmare, Insane and Apocalypse. The top three use bigger economies, more harvesters, parallel production and aggressive raids. Insane adds 15% enemy unit health/damage; Apocalypse adds 30%. Difficulty and map choices are retained in saves. Zero opponents is sandbox.

Select Frontier Plains for land combat, Naval River for waterways with bridges, or Archipelago for separated land areas and naval/air combat. Ground units cannot enter water. Ships navigate water and pass under river bridges. Aircraft fly over both.

Begin with a command center, power plant, refinery and two civilian harvesters. Barracks unlock Vehicle Shops; a completed Vehicle Shop unlocks airfields. Buildings take time to construct and activate when complete. Power shortages slow production and research and disable powered defenses. Destroy all opposing command centers to win.

## Construction and expansion

Build ordinary structures within 18 world tiles of a completed friendly command center. Placement displays the command range. Buildings need dry land; a marina needs a land site directly beside water.

Select a harvester and choose Build command center (900 minerals), then select a clear, dry site. The harvester travels there and starts 30-second construction on arrival. A completed expansion supplies a new construction area. Pending expansion orders can be cancelled for a refund; a blocked site is refunded. Expansions cannot be established across impassable water by a ground harvester.

## Units, queues and controls

- Tap/click units or buildings to select. A building replaces the current army selection and opens its production list. Shift-click adds units.
- Hold left-click and drag on desktop for live rectangle selection. On phones choose Select area, then drag.
- Right-click to move or attack. On phones choose Move / attack and tap. Attack-move fights visible enemies along the route. Units use formations and obstacle-aware navigation, and turn toward movement.
- Drag to pan on phones; WASD/arrows pan on desktop. Pinch, scroll or use +/− to zoom. Tap the minimap to move the camera.
- Each production building runs its own queue independently, including multiple buildings of the same type. Set its rally point for newly produced units. Marina rally points must be on water.
- Command centers produce harvesters. Barracks train rifle infantry, rocket troopers and snipers. Vehicle Shops produce harvesters, tanks, scouts and siege artillery. Airfields produce helicopters, strike planes, bombers and interceptor fighters.
- Build a shoreline marina to produce patrol gunboats and missile destroyers. Destroyers can intercept aircraft as well as launch surface attacks.

## Research and infantry abilities

Open Upgrades to research one upgrade at a time. The required completed facility is shown on each card. Research pauses if its facility is destroyed or unavailable; rebuilding resumes it.

| Upgrade | Cost / time | Effect |
| --- | --- | --- |
| Infantry entrenchment | 300 / 15s; barracks | Foot soldiers dig/remove trenches in exactly 3 seconds. Trenches reduce damage by 65%; digging, entrenched and removing units cannot move. |
| Sniper optical cloak | 450 / 20s; barracks | Toggle invisibility. Only opposing scout buggies within 9 tiles reveal cloaked snipers to their faction. |
| Composite armor | 500 / 20s; Vehicle Shop | Units take 20% less damage. |
| Advanced weapons | 550 / 22s; Vehicle Shop | Units deal 25% more weapon damage. |

Select upgraded foot soldiers to use Dig trench / Remove trench. Select upgraded snipers to toggle cloak. Your own cloaked snipers remain faintly visible to you.

## Combat and scouting

Scouts and aircraft have larger sight ranges. Unexplored ground is hidden and explored ground dims outside current sight. Cloaked enemies remain hidden without scout detection, even inside normal vision.

Rocket troopers counter armor and aircraft; snipers counter infantry; tanks counter infantry; artillery gains damage against buildings; interceptors specialize in aircraft. Siege artillery fires delayed rockets with ground splash damage. Vehicles crush trees and leave debris.

SAM Missile Batteries cost 500 minerals, require 30 power, and launch 320-damage guided anti-air missiles over a 15-tile range. They cannot fire at ground targets.

Select a completed missile silo, press Launch rocket and select a ground target. Each strike costs 150 minerals, travels for 4.5 seconds and reloads for 25 seconds. The 4.5-tile blast deals up to 1,600 damage to units and 650 to structures, with distance falloff and armor/trench mitigation. It damages friendly ground forces and ships, destroys trees and does not hit aircraft. A targeting circle indicates the blast area.

## Saves and validation

Auto-save runs every 15 game seconds and on page hiding when storage is available. Save and Resume saved operation retain research, stance timers, cloak, map, difficulty, tactical missiles, harvester expansion orders, per-building queues, targets, enemy economy, exploration and camera. Saves stay on this device, browser and site. Blocked/cleared browser storage may prevent persistence. Older version-2 saves resume as Plains with no researched upgrades.

The simulation suite covers old and new gameplay together, including funded opponents on both water maps. Desktop Chromium and a 390×844 touch browser were checked for map/difficulty selection, research, exact trench timing, cloak, shoreline placement, ship production and save/reload/resume without script errors. Physical phones have not been tested. Assets are procedural Canvas voxel renderings rather than exported 3D mesh files.

## Ironwake 3.1 visual and naval update
The game is now named Ironwake Command; the repository and play URL remain the same, and existing saves remain available. Rifle infantry, rocket troopers and snipers have articulated running strides, body motion and footstep dust. Trenched units stay still. Each combat type has its own weapon signature, including rifle bursts, scoped sniper trails, machine-gun streaks, heavy tank shells, rotary-cannon fire, strike missiles, falling bombs, blue interceptor bolts, naval autocannon fire and distinct siege/SAM/vertical-launch rockets. Unit equipment and silhouettes distinguish rifles, bazookas, sniper camouflage, wheeled scouts, rocket artillery and aircraft roles.

The missile destroyer is a much larger warship with a segmented hull and deck, missile cells, guns, bridge windows, railings, funnels, radar mast and stern helipad. Destroyers have additional water clearance and separation spacing. Naval units leave wakes while moving.

New Naval River matches have approximately 10-tile-wide channels (formerly 6); new Archipelago channels are approximately 16 tiles wide (formerly 12). All opposing bases start across the first river from the player's starting bank. Existing saved matches retain their original channel widths and positions; start a new operation to use the new naval layout.

## Operations update · Ironwake 4.0

- Enemies stage combined ground/air raids, take flanking routes, contest objectives, retreat and repair near their command centers, and use landing transports on water maps.
- Orders show destination markers. Ground, naval and air formations choose legal terrain independently, match movement speeds within their group, and route around congestion at bridges.
- Marinas produce Landing Transports: six cargo slots, with infantry using one slot, scouts two and other vehicles three. Bring troops within four tiles, select the transport and choose **Load nearby ground units**. Sail beside clear land and select **Unload**. Cargo survives saving and is lost with its ship.
- Hold neutral sites with ground combat units for eight uncontested seconds. Mineral outposts earn five minerals per second; radar stations reveal a 22-tile radius; crossing watchposts reveal nearby approaches. Sites appear on the minimap after exploration. Enemies can capture them too.
- Boot camp is a six-step playable tutorial covering harvesting, power, construction, production, orders, capturing and combat. It starts with harvesters and no military units or production buildings.
- Skirmish options select starting resources, 96/112/128-tile maps, fog and 0.75×/1×/1.5× game speed. Extra starting minerals also go to opponents, on top of difficulty funding.
- Control groups: Ctrl/Cmd + 1–3 assigns; 1–3 recalls. On phones use **Assign selected** then a group number, or hold the group button. Double-click/double-tap a unit to select nearby units of the same type. Touch action buttons have 44px targets.
- Damaged vehicles and buildings smoke; hits show incoming direction; destroyed buildings leave rubble; strategic missile targets show impact countdowns. Engine, rotor, naval, weapon, water and order sounds are synthesized locally and respect the sound switch.
- Victory and defeat show match time, resources gathered, damage, losses, kills and captures, with quick rematch and menu actions. Rematch preserves skirmish options.
- Saves retain cargo, groups, objectives, settings, statistics and tutorial progress. Older saves keep their terrain and gain default options; start a new operation for the full new battlefield setup.

Validation: `npm run check` and `npm test`. The simulation suite includes transport capacity and landing rules, AI landings/retreats, contested objectives, every map size, persistence and tutorial completion.

## Level campaign and achievements · Ironwake 4.1

Choose **Level campaign** in the main menu. Level 1 is available immediately; victory unlocks the next level. Completed levels can be replayed, defeat offers a retry, and victory offers **Next level**. Custom skirmishes and boot camp remain available.

| Level | Operation | Newly introduced enemy units |
| --- | --- | --- |
| 1 | First Contact | Rifle squads |
| 2 | Rocket Patrol | Rocket troopers |
| 3 | Silent Hunters | Snipers |
| 4 | Recon Sweep | Scout buggies |
| 5 | Iron Division | Battle tanks |
| 6 | Siege Line | Rocket artillery |
| 7 | Rotor Storm | Attack helicopters |
| 8 | Skybreaker | Strike planes, interceptors and bombers |
| 9 | River Landing | Patrol gunboats and landing transports |
| 10 | Ironwake | Missile destroyers |

Enemy rosters are cumulative. AI construction and production cannot skip ahead to later units. Funding, production, mining and construction grow each level, while raids arrive sooner. Later levels add larger maps, multiple opponents and water battles. Player production remains unrestricted so you can choose your own strategy.

Eight achievements track first victory, sniper-only victory, infantry-only victory, zero losses, a victory within ten minutes of game time, owning all capture objectives, completing level 5, and completing all ten levels. Campaign and skirmish victories qualify; sandbox and boot camp do not.

**Silent Victory** requires deploying at least one sniper and no other combat unit during the entire match. Harvesters and upgrades are allowed. Building a turret, SAM battery or silo, or launching a strategic missile, disqualifies the attempt. Disqualification survives casualties, transport loading, saving and resuming. Check **Match challenges** in the command panel for live status. The achievement gallery appears in the main menu, with new unlocks on the results screen.

Level progress and achievements are stored separately from the battlefield save in this browser. Current levels and challenge records also survive Save/Resume. Older battlefield saves still resume, but cannot earn achievements whose complete force/loss history cannot be verified. If browser storage is blocked, progress remains available for the current visit and the UI explains that it could not be saved.

## Stars, escalation and enemy specials · Ironwake 4.2

Campaign wins now earn up to three stars: one for victory, one for finishing within the level's target time (8 minutes on level 1, increasing by a minute per level), and one for losing no buildings and at most the stated number of units (3–8 depending on level). The menu shows targets before launch; results show each condition and the rating. Best ratings survive replays, Save/Resume and reloads. Existing completed levels retain their unlocks and get their baseline victory star; bonus stars require a new attempt. There are 30 stars total.

Campaign difficulty has been rebuilt with a stronger, accelerating economy, faster construction and production, shorter raid intervals, and rising enemy health and damage. Opponents buy established refineries, power and barracks at launch, with later factories, airfields and marinas matching their unlocked roster. These facilities cost enemy minerals. Player starting forces and custom-skirmish difficulty remain unchanged.

Enemy-only production unlocks cumulatively:

| Level | Special troop | Role |
| --- | --- | --- |
| 2 | Arc Shock Trooper | Armored infantry with chain-damage arc fire |
| 4 | Wraith Raider | Fast plasma assault buggy |
| 6 | Siege Juggernaut | Heavy armored rocket artillery |
| 8 | Revenant Gunship | Armored aircraft with splash fire |
| 10 | Leviathan Hover Fortress | Huge amphibious missile platform |

These units have their own models and weapon effects, and never appear in player production. Only the primary enemy in the last level builds the Leviathan. It costs 6,500 minerals and takes 75 seconds of simulation time to build, unaffected by the enemy production-speed bonus (power shortages still slow it). One may exist or be queued at a time; the enemy can rebuild a destroyed fortress if its factory, command center and economy survive. A warning panel shows construction progress and then its health. It crosses land and water, fires heavy splash missiles, engages aircraft, and must be destroyed before victory if it has deployed. Striking its production base before deployment remains a valid strategy.

Validation includes star boundaries and best-score persistence, legacy completion migration, all ten difficulty tiers, enemy-exclusive production, paid timed boss production, amphibious navigation, splash damage, boss victory rules, rendering and Save/Resume.

## Endless survival · Ironwake 4.3

Choose **Play survival** in the main menu. Survival uses the selected battlefield, difficulty, map size, starting resources, fog and game-speed settings. There are no enemy bases to destroy: defend your command centers against successive assault waves for as long as possible.

- The first attack arrives after 60 seconds of preparation. During a preparation period, **Ready · send next wave** starts it early.
- Clear every enemy and incoming reinforcement to finish a wave. You receive 200 + 50 × wave number in minerals, followed by 12–30 seconds to rebuild and prepare.
- Waves grow in number, health and damage, introducing vehicles, aircraft and enemy-only special troops. Every tenth wave includes a Leviathan. Army size caps at 90 per wave, while health and damage keep rising indefinitely.
- Ground entries are checked for reachable routes and kept away from your structures; water maps spawn ground forces on connected land. Air reinforcements can enter if ground entries become completely obstructed.
- The HUD shows the wave, remaining enemies, preparation countdown and next assault preview. Defeat shows waves cleared, wave reached and your personal best. Retry preserves your selected settings.
- Save/Resume retains the mode, countdown, active enemies and pending reinforcements. Your highest number of cleared waves is stored separately on this browser. Blocked storage keeps the record for the current visit only.
- Survival has its own record and does not unlock campaign levels, stars or victory achievements. Campaign, skirmish and boot camp remain available.

Validation covers wave transitions, reward accounting, difficulty and roster escalation, reachable spawns on every map, records, Save/Resume, defeat/retry and switching between modes.

## Difficulty rebalance · Ironwake 4.4

Campaign enemies now have smaller budgets, slower production and income, lower health/damage bonuses and longer breaks between raids. The first campaign raid is scheduled after 79 seconds instead of about 53; the last level retains its special troops and Leviathan while reducing production from 5.35× to 3× and health from 2.1× to 1.31×. Every level still increases in difficulty.

Normal Survival begins with five attackers instead of seven, reaches 21 instead of 29 on wave 10, and scales health and damage more gently. Recovery periods are now 20–45 seconds instead of 12–30. Difficulty choices, boss waves, rewards, stars, achievements and saved progress remain available. Start a new attempt to receive the reduced starting enemy budgets and armies.

## Command research and tactical units · Ironwake 5.0

Open **Command Research** in the main menu. Earn **40 Command Points (CP)** per first campaign-level victory, **10 CP** per newly earned best star, **15 CP** per achievement, and **20 CP** per new five-wave Survival milestone. Existing saved progress counts automatically. Rewards derive from unique completions and best records, so repeating the same result never pays again. No points are awarded for sandbox or tutorial wins.

Research has three branches: **Infantry**, **Armor**, and **Air & Naval**. Purchase unit unlocks and modest utility perks. Every purchase can be refunded free; refunding a prerequisite also refunds its dependent research. **Refund all research** returns every point. Purchases apply to new operations. Resumed battles retain their saved research loadout, so refunds cannot alter a battle already in progress.

| New unit | Production | Tactical role |
| --- | --- | --- |
| Combat Engineer | Barracks | Automatically repairs vehicles/buildings within 3 tiles at 12 HP/sec; builds cover within 4 tiles for 50 minerals. Cover builds in 2 seconds, lasts 45 seconds and reduces nearby infantry damage by 25%. |
| Field Medic | Barracks | Unarmed; automatically heals nearby infantry at 7 HP/sec. |
| Mortar Team | Barracks | Deploy for 2 seconds to fire long-range splash rounds. Cannot move until packed for 1 second. |
| Shield Carrier | Vehicle Shop | Reduces frontal damage to allied units behind it by 40%; flank/rear attacks bypass it. |
| EMP Rover | Vehicle Shop | Target within 8 tiles: disables enemy ground/naval vehicles and buildings in a 3.5-tile radius for 4 seconds; 30-second recharge. |
| Minelayer | Vehicle Shop | Places anti-vehicle mines within 4 tiles for 25 minerals; 3-second recharge. Scout buggies detect hidden mines within 9 tiles and allow their team to route around them. Maximum 30 mines. |
| Drone Carrier | Airfield | Launches up to 3 fragile drones, replacing losses every 12 seconds. Switch attack/recon mode; reconnaissance drones explore farther. Drones are lost when their carrier is destroyed. |
| Amphibious Tank | Vehicle Shop | Crosses land and water directly, with 280 HP versus a standard tank's 380 HP. |

Utility research gives **10% faster engineer repairs**, **20% faster harvester unloading** (0.5 to 0.4 seconds), **+2 scout/radar-station sight range**, and **10% shorter cover/EMP/mine cooldowns**. Existing weapon and armor research remains a separate in-battle system.

Select a new unit to see its role and ability buttons. Cover, EMP and mine placement use a target click/tap; Cancel, Escape or desktop right-click cancels targeting. Mortars have deploy/pack controls; carriers have a drone-mode switch. Unlocked units only appear under their selected production building. Enemy-exclusive units and the easier campaign/Survival balance remain intact.

Save/Resume includes battle research, cover lifetime, deployed mortars, EMP timers, mines and drone-carrier links. Permanent research is stored separately on this browser. If storage is blocked, purchases/refunds remain usable for the current visit. The test suite checks unique rewards, budgets/prerequisites/refunds, all unit roles, direction-sensitive shielding, targeted abilities, amphibious navigation, models and persistence.
