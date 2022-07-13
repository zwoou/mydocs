import { defineClientConfig } from "@vuepress/client";
import ChartJS from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "C:/Users/cc/workweb/mydocs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});