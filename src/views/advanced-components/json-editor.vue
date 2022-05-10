<template>
<div>
    <el-row type="flex" justify="center">
      <el-col :xl="16">
        <el-row :gutter="24">
          <el-col :span="24">
            <div class="card border-0 shadow-sm p-5">
              <h4>JSON Editor</h4>
              <span>
                Checkout <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a> and  <a href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js" target="_blank">json-lint</a> for more infomation.
              </span>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Demo</h4>
              </div>
              <div class="card-body">
               <json-editor ref="jsonEditor" v-model="value" />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import JsonEditor from "@/components/JsonEditor";

const jsonData =
  '{"web-app": {"servlet": [   {"servlet-name": "cofaxCDS","servlet-class": "org.cofax.cds.CDSServlet","init-param": {"configGlossary:installationAt": "Philadelphia, PA","configGlossary:adminEmail": "ksm@pobox.com","configGlossary:poweredBy": "Cofax","configGlossary:poweredByIcon": "/images/cofax.gif","configGlossary:staticPath": "/content/static","templateProcessorClass": "org.cofax.WysiwygTemplate","templateLoaderClass": "org.cofax.FilesTemplateLoader","templatePath": "templates","templateOverridePath": "","defaultListTemplate": "listTemplate.htm","defaultFileTemplate": "articleTemplate.htm","useJSP": false,"jspListTemplate": "listTemplate.jsp","jspFileTemplate": "articleTemplate.jsp","cachePackageTagsTrack": 200,"cachePackageTagsStore": 200,"cachePackageTagsRefresh": 60,"cacheTemplatesTrack": 100,"cacheTemplatesStore": 50,"cacheTemplatesRefresh": 15,"cachePagesTrack": 200,"cachePagesStore": 100,"cachePagesRefresh": 10,"cachePagesDirtyRead": 10,"searchEngineListTemplate": "forSearchEnginesList.htm","searchEngineFileTemplate": "forSearchEngines.htm","searchEngineRobotsDb": "WEB-INF/robots.db","useDataStore": true,"dataStoreClass": "org.cofax.SqlDataStore","redirectionClass": "org.cofax.SqlRedirection","dataStoreName": "cofax","dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver","dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon","dataStoreUser": "sa","dataStorePassword": "dataStoreTestQuery","dataStoreTestQuery": "SET NOCOUNT ON;select test=\'test\';","dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log","dataStoreInitConns": 10,"dataStoreMaxConns": 100,"dataStoreConnUsageLimit": 100,"dataStoreLogLevel": "debug","maxUrlLength": 500}},{"servlet-name": "cofaxEmail","servlet-class": "org.cofax.cds.EmailServlet","init-param": {"mailHost": "mail1","mailHostOverride": "mail2"}},{"servlet-name": "cofaxAdmin","servlet-class": "org.cofax.cds.AdminServlet"},{"servlet-name": "fileServlet","servlet-class": "org.cofax.cds.FileServlet"},{"servlet-name": "cofaxTools","servlet-class": "org.cofax.cms.CofaxToolsServlet","init-param": {"templatePath": "toolstemplates/","log": 1,"logLocation": "/usr/local/tomcat/logs/CofaxTools.log","logMaxSize": "","dataLog": 1,"dataLogLocation": "/usr/local/tomcat/logs/dataLog.log","dataLogMaxSize": "","removePageCache": "/content/admin/remove?cache=pages&id=","removeTemplateCache": "/content/admin/remove?cache=templates&id=","fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder","lookInContext": 1,"adminGroupID": 4,"betaServer": true}}],"servlet-mapping": {"cofaxCDS": "/","cofaxEmail": "/cofaxutil/aemail/*","cofaxAdmin": "/admin/*","fileServlet": "/static/*","cofaxTools": "/tools/*"},"taglib": {"taglib-uri": "cofax.tld","taglib-location": "/WEB-INF/tlds/cofax.tld"}}}';

export default {
  name: "JsonEditorDemo",
  components: { JsonEditor },
  data() {
    return {
      value: JSON.parse(jsonData),
    };
  },
};
</script>

<style scoped>
.editor-container {
  position: relative;
  height: 100%;
}
</style>

