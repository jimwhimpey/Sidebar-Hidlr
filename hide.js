// The Sidebar element
var sidebar = document.getElementById("right_column");

// Find the right nodes
if (document.getElementById("dashboard_controls_promo_tumblr_tuesday_top"))
	var tumblrTuesday = document.getElementById("dashboard_controls_promo_tumblr_tuesday_top").parentNode.parentNode;
if (document.getElementById("dashboard_controls_suggested_blogs"))
	var recommended = document.getElementById("dashboard_controls_suggested_blogs").parentNode;
if (document.getElementById("dashboard_controls_radar_buttons"))
	var radar = document.getElementById("dashboard_controls_radar_buttons").parentNode;
	
// Handle the settings that we get returned
function handleSettings(msgEvent) {
	
	// Grab the object
	var settings = msgEvent.message;
	
	// Remove the things the user wants to remove
	if (settings.tumblrtuesday && tumblrTuesday)
		sidebar.removeChild(tumblrTuesday);
	if (settings.radar && radar)
		sidebar.removeChild(radar);
	if (settings.recommended && recommended)
		sidebar.removeChild(recommended);
	
}

// Listen for it
safari.self.addEventListener("message", handleSettings, false);

// Get the settings
safari.self.tab.dispatchMessage("settings", "data");