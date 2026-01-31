import { useNprogress } from "src/hooks/use-nprogress";
import { useRoutes } from "react-router";
import { routesOutlets } from "src/router";
import { SidebarProvider, useSidebarContext } from "src/contexts/sidebar-context.tsx";
import { CustomizationConsumer, CustomizationProvider } from "src/contexts/customization.tsx";
import { createTheme } from "src/theme";
import "src/i18n/i18n";
import "src/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import CssBaseline from "@mui/material/CssBaseline";
import { RtlDirection } from "src/components/base/rtl-direction.tsx";
import { Toastr } from "src/components/base/toastr.tsx";
import Notification from "src/shared/alerts/notification.tsx";
import GlobalLoading from "src/state/loading/loading-component";

function App() {

	useNprogress();

	const router = useRoutes(routesOutlets);

	const RenderComponent = () => {
		const { isSidebarCollapsed, isSidebarHovered } = useSidebarContext();

		if (!isSidebarCollapsed || !isSidebarHovered) {
			// return null;
		}

		return router;
	};

	return (
		<SidebarProvider>
			<CustomizationProvider>
				<CustomizationConsumer>
					{(settings) => {
						if (!settings.isInitialized) {
							// return null
						}

						const theme = createTheme({
							colorPreset: settings.colorPreset,
							direction: settings.direction,
							paletteMode: settings.paletteMode,
							layout: settings.layout,
						});

						return (
							<ThemeProvider theme={theme}>
								<Helmet>
									<meta name="color-scheme" content={settings.paletteMode} />
									<meta name="theme-color" content={theme.palette.primary.main} />
								</Helmet>
								<RtlDirection direction={settings.direction}>
									<CssBaseline />
									<RenderComponent />
									<Notification />
									<GlobalLoading />
									<Toastr />
								</RtlDirection>
							</ThemeProvider>
						);
					}}
				</CustomizationConsumer>
			</CustomizationProvider>
		</SidebarProvider>
	);
}

export default App;
