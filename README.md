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
