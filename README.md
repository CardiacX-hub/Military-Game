# Crystal Front
A playable isometric RTS with procedurally drawn voxel-style military assets. No dependencies or asset downloads are required.

## Run
Requires Node.js 18 or newer. From this directory run `npm start`, then open port 3000 in your browser. Use `PORT` to select another port.

## Play
Click friendly units to select them; Shift-click adds units. Right-click to move or attack enemies. The command sidebar lets you place buildings or queue infantry, tanks and harvesters. Harvesters automatically gather and deliver crystals to refineries. Maintain enough power to keep production and defenses operating. Enemy waves grow over time; defend your command center.

WASD or arrow keys pan, mouse wheel zooms, Space pauses, and Escape cancels placement. Select combat units selects your entire army. New operation resets the match.

## Validation
`npm run check` validates JavaScript syntax. HTTP startup and isolated simulation checks passed for mining, production, power shortages, enemy waves and combat. Browser visual validation was unavailable because the cloud network policy blocked the Playwright browser download.

The assets are procedural voxel-style Canvas renderings rather than exported 3D mesh files.

## Phones and tablets
Tap units to select. Tap Move / attack, then a destination or enemy to order selected units. Select army selects all combat units. Drag the battlefield to pan; pinch or use +/− to zoom. Construction uses a tap on clear ground; Cancel exits placement. The command panel sits below the battlefield on portrait phones.

Models include roughly ten times as many procedural detail blocks, including armor tiles, radiator fins, track links and infantry equipment. These remain Canvas voxel-style renderings.

## Terrain and starting forces
Start with two civilian harvesters and no military units. Produce your army from the command panel. Grass, mineral-field soil and paved base tiles use distinct palettes. Building colors identify their roles: blue command, gold power, teal refining, green barracks, purple factories and red defenses. Tanks and harvesters crush trees along their movement paths, leaving stumps and fallen wood; infantry does not crush trees.
