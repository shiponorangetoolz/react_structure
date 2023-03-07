import Routes from "./router";
import ThemingLayout from "./views/layout/ThemingLayout";
import { CssBaseline } from "@mui/material";
import Snackbars from "./core/global/Snackbars/components/Snackbars";
import NavigationScroll from "./views/layout/NavigationScroll";
import GlobalCheckLayout from "./views/layout/GlobalCheckLayout";

const App = () => {
    return (
        <ThemingLayout>
            <Snackbars />
            <GlobalCheckLayout />
            <CssBaseline />

            <NavigationScroll>
                <Routes />
            </NavigationScroll>
        </ThemingLayout>
    );
};

export default App;
