// Include mocks
include( 'Javascript/Sections.js');
include( 'Javascript/Scenarios.js');

// Include your services
include( 'Javascript/Services/Requests.js');
include( 'Javascript/Services/ScenarioPlayer.js');

// Include your devices
include( 'Javascript/Devices/Devices.js');
include( 'Javascript/Devices/MotionSensor.js');
include( 'Javascript/Devices/Fan.js');
include( 'Javascript/Devices/Door.js');
include( 'Javascript/Devices/Curtains.js');
include( 'Javascript/Devices/Lights.js');

// Include your views
include( 'Javascript/Views/SimonView.js');
include( 'Javascript/Views/MainView.js');
include( 'Javascript/Views/ScenarioDetailView.js');
include( 'Javascript/Views/DevicesListView.js');
include( 'Javascript/Views/CreateView.js');
include( 'Javascript/Views/BrowseView.js');
include( 'Javascript/Views/MainMenuView.js');
include( 'Javascript/Views/ScenarioEditor.js');
include( 'Javascript/Views/ScenarioEditorBis.js');
include( 'Javascript/Views/ActionSelectionView.js');
include( 'Javascript/Views/ActionSelectionBis.js');

// Init application with view config
MAF.application.init( {
	views: [
		{ id: 'SimonView', viewClass: SimonView},
		{ id: 'MainView', viewClass: MainView },
		{ id: 'ActionSelectionView', viewClass: ActionSelectionView },
		{ id: 'ActionSelectionBis', viewClass: ActionSelectionBis },
		{ id: 'ScenarioDetailView', viewClass: ScenarioDetailView },
		{ id: 'MainMenuView', viewClass: MainMenuView },
		{ id: 'ScenarioEditor', viewClass: ScenarioEditor },
		{ id: 'ScenarioEditorBis', viewClass: ScenarioEditorBis },
        { id: 'ManageView', viewClass: BrowseView },
        { id: 'DevicesListView', viewClass: DeviceListView },
        { id: 'About', viewClass: MAF.views.AboutBox },
        { id: 'CreateView', viewClass: CreateView }
	],
	defaultViewId: 'MainView',
	settingsViewId: 'About'
} );
