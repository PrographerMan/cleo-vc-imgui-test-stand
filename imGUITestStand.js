/// <reference path=".config/vc.d.ts" />

const FRAME_ID = 'ImGUITestStand';

let menuVisible = false;
let comboValue = 0;
let radioValue = 0;
let sliderFloatValue = 0;
let sliderIntValue = 0;
let selectableValue = false;
let menuItemValue = false;
let mainMenuCheckboxValue = false;
let simpleButtonValue = false;

// Draws a notification in top left window's corner
ImGui.SetMessage('Notification 1');
ImGui.SetMessage('Notification 2');
ImGui.SetMessage('Notification 3');

function toggleVisibility() {
    menuVisible = !menuVisible;
}

while (true) {
    wait(0);

    if (Pad.IsKeyUp(20)) {
        toggleVisibility();
    }

    if (menuVisible) {
        ImGui.BeginFrame(FRAME_ID);
        
            // Main menu bar (drawing start)
            ImGui.BeginMainMenuBar(FRAME_ID);
                // Menu items
                menuItemValue = ImGui.MenuItem('Menu item 1', menuItemValue, true);
                ImGui.MenuItem('Menu item 2', true, true);
                ImGui.MenuItem('Menu item 3', true, false);
                
                ImGui.Button('Bars button', 160.0, 36.0);
                mainMenuCheckboxValue = ImGui.Checkbox('Bars checkbox', mainMenuCheckboxValue);

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

                simpleButtonValue = ImGui.Button('Simple button 3', 160.0, 50.0);
                ImGui.Text(`Simple button value is ${simpleButtonValue}`);
                
                if (simpleButtonValue) {
                    ImGui.SetMessage('Simple button was clicked');
                }

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
                sliderIntValue = ImGui.SliderInt('Slider with integer value', 0, 0, 10);
                sliderFloatValue = ImGui.SliderFloat('Slider with float value', 0, 0, 20.0);

                ImGui.Text(`Slider float value is: ${sliderFloatValue}`);
                ImGui.SameLine();
                ImGui.Text(`Slider int value is: ${sliderIntValue}`);

                // Text with tooltip
                ImGui.Text('Hover me to show tooltip');
                
                if (ImGui.IsItemHovered(FRAME_ID)) {
                    ImGui.SetTooltip('This is tooltip');
                }

                // Collapsing header
                if (ImGui.CollapsingHeader('Collapsing header')) {
                    ImGui.Text('Collapsing header text');
                }

                comboValue = ImGui.ComboBox('Combo', 'Item 1,Item 2,Item 3', comboValue);

                radioValue = ImGui.RadioButton('Radio Button 1', radioValue, 0);
                radioValue = ImGui.RadioButton('Radio Button 2', radioValue, 1);
                radioValue = ImGui.RadioButton('Radio Button 3', radioValue, 2);

                ImGui.Text(`Radio button value is: ${radioValue}`);

                // Selectable widget
                if (ImGui.Selectable('Selectable 1')) {
                    ImGui.Text('Selectable');
                }
            ImGui.End();

        ImGui.EndFrame();
    }
}
