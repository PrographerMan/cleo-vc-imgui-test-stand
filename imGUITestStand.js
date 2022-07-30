/// <reference path=".config/vc.d.ts" />

const FRAME_ID = 'ImGUITestStand';

let barsCheckboxValue = false;

function toggleCheckboxValue() {
    barsCheckboxValue = !barsCheckboxValue;
}

// Draws a notification in top left window's corner
ImGui.SetMessage('Notification 1');
ImGui.SetMessage('Notification 2');
ImGui.SetMessage('Notification 3');

while (true) {
    wait(0);

    ImGui.BeginFrame(FRAME_ID);
    
        // Main menu bar (drawing start)
        ImGui.BeginMainMenuBar(FRAME_ID);
            // Menu items
            ImGui.MenuItem('Menu item 1', true, true);
            ImGui.MenuItem('Menu item 2', true, true);
            ImGui.MenuItem('Menu item 3', true, false);
            
            ImGui.Button('Bars button', 160.0, 36.0);
            ImGui.Checkbox('Bars checkbox', barsCheckboxValue);
            
            // change checkbox's value if it was clicked
            if (ImGui.IsItemClicked(FRAME_ID)) {
                toggleCheckboxValue();
            }

            // add some spacing for next widget
            ImGui.Spacing();

            // bars text
            ImGui.Text('Bars text');
        // Main menu bar (drawing end)
        ImGui.EndMainMenuBar();

        
        // Window (start drawing)
        ImGui.Begin("ImGUI Test Stand", true, false, false, false, false);
            ImGui.SetCursorVisible(true);

            // Simple button
            ImGui.Button('Simple button 1', 160.0, 50.0);
            
            // This function draws widget in same line than previous
            ImGui.SameLine();

            // Another button
            ImGui.Button('Simple button 2', 160.0, 50.0);
            ImGui.SameLine();
            ImGui.Button('Simple button 3', 160.0, 50.0);

            // Colored button
            ImGui.ButtonColored('Button Colored', 255, 0, 0, 1.0, 50.0, 50.0);


            ImGui.Text('Simple text');
            ImGui.TextDisabled('Disabled text');
            ImGui.TextWithBullet('Text with bullet');
            ImGui.TextWrapped('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            ImGui.TextColored('Colored text', 0, 255.0, 0.0, 1.0);

            ImGui.NewLine();
            ImGui.Separator();
            ImGui.NewLine();

            // Sliders
            ImGui.SliderInt('Slider with integer value', 0, 0, 10);
            ImGui.SliderFloat('Slider with float value', 0, 0, 20.0);

            // Text with tooltip
            ImGui.Text('Hover me to show tooltip');
            
            if (ImGui.IsItemHovered(FRAME_ID)) {
                ImGui.SetTooltip('This is tooltip');
            }

            ImGui.CollapsingHeader('Collapsed header');

            ImGui.ComboBox('Combo', 'Item 1,Item 2,Item 3', 1);

            // Selectable widget
            ImGui.Selectable('Selectable');
        ImGui.End();

    ImGui.EndFrame();
}
