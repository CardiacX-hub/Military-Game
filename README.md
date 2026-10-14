# Crystal Front — Tactical Ops 2.2

A phone-friendly isometric browser RTS with procedural voxel-style graphics. Play at https://cardiacx-hub.github.io/Military-Game/.

## Run and validate

Requires Node.js 18 or newer. Run `npm start` and open port 3000. There are no runtime package dependencies. `npm run check` checks both scripts; `npm test` runs the simulation suite, including a three-minute economy/expansion scenario.

## Start an operation

Choose one of six faction colors and 0–3 opponents. Zero opponents provides a sandbox. Begin with a command center, power plant, refinery and two civilian harvesters. Construct a barracks before building a vehicle factory or airfield. Buildings take time to construct and activate when complete; power shortages slow production and disable powered defenses.

Opponents mine actual mineral fields, spend their own funds, build bases, train through facilities and assemble attacks. Destroy all opposing command centers to win.

## Controls

- Tap/click units or buildings to select. Buildings replace the current unit selection and open their production list. Shift-click adds units.
- Right-click to move or attack. On phones, select Move / attack and tap a destination. Orders use formations; ground units path around buildings and infantry avoids trees. Ground vehicles crush trees.
- On desktop, hold the left mouse button and drag to select units; selection updates as the rectangle grows. A short click still selects a single unit or building. On phones, use Select area and drag. Attack-move orders fight visible enemies encountered along the route.
- Drag to pan on phones; WASD/arrows pan on desktop. Pinch, scroll or use +/− to zoom. Tap the minimap to jump the camera.
- Select a production building to queue its units. Command centers produce harvesters. Set rally point directs newly produced units to a location.
- Select a completed missile silo, choose Launch rocket, then tap/click a target. The targeting circle shows its ground blast radius. Each strike costs 150 minerals, travels for 4.5 seconds and has a 25-second reload. The blast damages friendly and enemy ground forces and destroys trees, but does not hit aircraft.
- Sound controls mute synthesized combat audio. Save writes the current operation to this browser. Menu confirms before leaving and attempts a save.

## Tactics and scouting

The map is 96×96 tiles. Scouts and aircraft have larger sight ranges. Unexplored terrain is hidden; explored ground dims when outside current vision. Hidden enemies are neither drawn nor automatically targeted.

Rocket troops counter armor and aircraft; snipers counter infantry; tanks counter infantry; artillery gains damage against buildings and deals splash damage; bombers provide ground splash damage; interceptor fighters specialize in air combat. Unit details identify their role.

## Saves

Auto-save runs every 15 seconds and on page hiding when browser storage is available. Resume saved operation appears in the main menu. Saves retain construction, queues, producer references, targets, enemy economy, exploration and camera position. Saves are local to this device, browser and site; private browsing or cleared/blocked storage may prevent persistence. Earlier releases do not have compatible saves.

## Validation and limits

The simulation suite covers pathfinding, formation orders, fog, targeting/counters, enemy mining/production, construction, rally points, rocket damage, save/resume and storage failure. Desktop Chromium and a 390×844 touch browser were exercised, including native touch area selection, attack-move, save across reload and resume, with no script errors. Graphics are voxel-style Canvas renderings rather than exported 3D models. Browser emulation does not replace testing on physical phones.

## Difficulty
Choose Easy, Normal, Hard or Brutal independently of the opponent count. Difficulty changes enemy starting funds, gathering speed, construction speed, training speed and attack scheduling. Player unit stats, costs and production speed stay consistent. Sandbox has no enemies regardless of difficulty. Saves retain their difficulty; saves from version 2.0 default to Normal.

| Mode | Enemy starting funds | Production speed | First attack decision | Later attack interval |
| --- | ---: | ---: | ---: | ---: |
| Easy | 900 | 0.75× | 90 seconds | 60 seconds |
| Normal | 1,200 | 1× | 50 seconds | 35 seconds |
| Hard | 1,500 | 1.2× | 35 seconds | 25 seconds |
| Brutal | 1,900 | 1.45× | 25 seconds | 18 seconds |

Funds pay for the initial harvesters as well as expansion. Attacks require a trained army, so these timings are decision opportunities rather than guaranteed attack arrivals.

## Independent queues and unit facing
Every player production building now runs its own FIFO queue concurrently with other buildings, including two buildings of the same type. Select a building to see only its queue; rally points remain specific to the producer. Existing queued orders keep their producer when a save is resumed. Ground and air models smoothly rotate toward actual movement, and headings are saved. Tracked vehicles have segmented hulls, circular turret components, fine track links and grills; aircraft have tapered fuselages, segmented wings and finer panels. Large aircraft and scout models have reduced visual scale to avoid oversized blocky silhouettes.
