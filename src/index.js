import dva from 'dva';
import './index.html';
import './index.css';
import {
	useRouterHistory
} from 'dva/router';
import {
	createHashHistory
} from 'history';
import {
	browserHistory
} from 'dva/router';
import createLogger from 'redux-logger';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva({
	// history: useRouterHistory(createHashHistory)({
	// 	queryKey: false
	// }),
	history: browserHistory,
	// onAction: createLogger()
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));


app.model(require('./models/users'));

app.model(require("./models/topMenu"));

app.model(require("./models/login"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');