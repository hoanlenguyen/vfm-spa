<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Form Validation</span>
              <span class="card-sub-label"></span>
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">
            Form component allows you to verify your data, helping you find and correct errors.
          </p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Just add the <code>rules</code> attribute for <code>Form</code> component, pass validation rules, and set <code>prop</code> attribute for <code>Form-Item</code> as a specific key that needs to be validated. See more information at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Sponsorship"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form :model=&#x22;ruleForm&#x22; :rules=&#x22;rules&#x22; ref=&#x22;ruleForm&#x22; label-width=&#x22;120px&#x22; class=&#x22;demo-ruleForm&#x22;&#x3E;
  &#x3C;el-form-item label=&#x22;Activity name&#x22; prop=&#x22;name&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;ruleForm.name&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity zone&#x22; prop=&#x22;region&#x22;&#x3E;
    &#x3C;el-select v-model=&#x22;ruleForm.region&#x22; placeholder=&#x22;Activity zone&#x22;&#x3E;
      &#x3C;el-option label=&#x22;Zone one&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;el-option label=&#x22;Zone two&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
    &#x3C;/el-select&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity time&#x22; required&#x3E;
    &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
      &#x3C;el-form-item prop=&#x22;date1&#x22;&#x3E;
        &#x3C;el-date-picker type=&#x22;date&#x22; placeholder=&#x22;Pick a date&#x22; v-model=&#x22;ruleForm.date1&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-date-picker&#x3E;
      &#x3C;/el-form-item&#x3E;
    &#x3C;/el-col&#x3E;
    &#x3C;el-col class=&#x22;line&#x22; :span=&#x22;2&#x22;&#x3E;-&#x3C;/el-col&#x3E;
    &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
      &#x3C;el-form-item prop=&#x22;date2&#x22;&#x3E;
        &#x3C;el-time-picker placeholder=&#x22;Pick a time&#x22; v-model=&#x22;ruleForm.date2&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-time-picker&#x3E;
      &#x3C;/el-form-item&#x3E;
    &#x3C;/el-col&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Instant delivery&#x22; prop=&#x22;delivery&#x22;&#x3E;
    &#x3C;el-switch v-model=&#x22;ruleForm.delivery&#x22;&#x3E;&#x3C;/el-switch&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity type&#x22; prop=&#x22;type&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;ruleForm.type&#x22;&#x3E;
      &#x3C;el-checkbox label=&#x22;Online activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Promotion activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Offline activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Simple brand exposure&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Resources&#x22; prop=&#x22;resource&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;ruleForm.resource&#x22;&#x3E;
      &#x3C;el-radio label=&#x22;Sponsorship&#x22;&#x3E;&#x3C;/el-radio&#x3E;
      &#x3C;el-radio label=&#x22;Venue&#x22;&#x3E;&#x3C;/el-radio&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity form&#x22; prop=&#x22;desc&#x22;&#x3E;
    &#x3C;el-input type=&#x22;textarea&#x22; v-model=&#x22;ruleForm.desc&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;submitForm(&#x27;ruleForm&#x27;)&#x22;&#x3E;Create&#x3C;/el-button&#x3E;
    &#x3C;el-button @click=&#x22;resetForm(&#x27;ruleForm&#x27;)&#x22;&#x3E;Reset&#x3C;/el-button&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
&#x3C;script&#x3E;
  export default {
    data() {
      return {
        ruleForm: {
          name: &#x27;&#x27;,
          region: &#x27;&#x27;,
          date1: &#x27;&#x27;,
          date2: &#x27;&#x27;,
          delivery: false,
          type: [],
          resource: &#x27;&#x27;,
          desc: &#x27;&#x27;
        },
        rules: {
          name: [
            { required: true, message: &#x27;Please input Activity name&#x27;, trigger: &#x27;blur&#x27; },
            { min: 3, max: 5, message: &#x27;Length should be 3 to 5&#x27;, trigger: &#x27;blur&#x27; }
          ],
          region: [
            { required: true, message: &#x27;Please select Activity zone&#x27;, trigger: &#x27;change&#x27; }
          ],
          date1: [
            { type: &#x27;date&#x27;, required: true, message: &#x27;Please pick a date&#x27;, trigger: &#x27;change&#x27; }
          ],
          date2: [
            { type: &#x27;date&#x27;, required: true, message: &#x27;Please pick a time&#x27;, trigger: &#x27;change&#x27; }
          ],
          type: [
            { type: &#x27;array&#x27;, required: true, message: &#x27;Please select at least one activity type&#x27;, trigger: &#x27;change&#x27; }
          ],
          resource: [
            { required: true, message: &#x27;Please select activity resource&#x27;, trigger: &#x27;change&#x27; }
          ],
          desc: [
            { required: true, message: &#x27;Please input activity form&#x27;, trigger: &#x27;blur&#x27; }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&#x3E; {
          if (valid) {
            alert(&#x27;submit!&#x27;);
          } else {
            console.log(&#x27;error submit!!&#x27;);
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom validation rules
</h3>
            <p
              class="mt-2 text-lg"
            >This example shows how to customize your own validation rules to finish a two-factor password verification.

</p><p class="mt-2 text-lg">Here we use <code>status-icon</code> to reflect validation result as an icon.</p>

            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
               <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirm" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Age" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm1')">Submit</el-button>
    <el-button @click="resetForm('ruleForm1')">Reset</el-button>
  </el-form-item>
</el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form :model=&#x22;ruleForm&#x22; status-icon :rules=&#x22;rules&#x22; ref=&#x22;ruleForm&#x22; label-width=&#x22;120px&#x22; class=&#x22;demo-ruleForm&#x22;&#x3E;
  &#x3C;el-form-item label=&#x22;Password&#x22; prop=&#x22;pass&#x22;&#x3E;
    &#x3C;el-input type=&#x22;password&#x22; v-model=&#x22;ruleForm.pass&#x22; autocomplete=&#x22;off&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Confirm&#x22; prop=&#x22;checkPass&#x22;&#x3E;
    &#x3C;el-input type=&#x22;password&#x22; v-model=&#x22;ruleForm.checkPass&#x22; autocomplete=&#x22;off&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Age&#x22; prop=&#x22;age&#x22;&#x3E;
    &#x3C;el-input v-model.number=&#x22;ruleForm.age&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;submitForm(&#x27;ruleForm&#x27;)&#x22;&#x3E;Submit&#x3C;/el-button&#x3E;
    &#x3C;el-button @click=&#x22;resetForm(&#x27;ruleForm&#x27;)&#x22;&#x3E;Reset&#x3C;/el-button&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
&#x3C;script&#x3E;
  export default {
    data() {
      var checkAge = (rule, value, callback) =&#x3E; {
        if (!value) {
          return callback(new Error(&#x27;Please input the age&#x27;));
        }
        setTimeout(() =&#x3E; {
          if (!Number.isInteger(value)) {
            callback(new Error(&#x27;Please input digits&#x27;));
          } else {
            if (value &#x3C; 18) {
              callback(new Error(&#x27;Age must be greater than 18&#x27;));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) =&#x3E; {
        if (value === &#x27;&#x27;) {
          callback(new Error(&#x27;Please input the password&#x27;));
        } else {
          if (this.ruleForm.checkPass !== &#x27;&#x27;) {
            this.$refs.ruleForm.validateField(&#x27;checkPass&#x27;);
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) =&#x3E; {
        if (value === &#x27;&#x27;) {
          callback(new Error(&#x27;Please input the password again&#x27;));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error(&#x27;Two inputs don\&#x27;t match!&#x27;));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: &#x27;&#x27;,
          checkPass: &#x27;&#x27;,
          age: &#x27;&#x27;
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: &#x27;blur&#x27; }
          ],
          checkPass: [
            { validator: validatePass2, trigger: &#x27;blur&#x27; }
          ],
          age: [
            { validator: checkAge, trigger: &#x27;blur&#x27; }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&#x3E; {
          if (valid) {
            alert(&#x27;submit!&#x27;);
          } else {
            console.log(&#x27;error submit!!&#x27;);
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Number Validate
</h3>
            <p class="mt-2 text-lg">Number Validate need a <code>.number</code> modifier added on the input <code>v-model</code> binding，it's used to transform the string value to the number which is provided by Vuejs.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
    <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form :model=&#x22;numberValidateForm&#x22; ref=&#x22;numberValidateForm&#x22; label-width=&#x22;100px&#x22; class=&#x22;demo-ruleForm&#x22;&#x3E;
  &#x3C;el-form-item
    label=&#x22;age&#x22;
    prop=&#x22;age&#x22;
    :rules=&#x22;[
      { required: true, message: &#x27;age is required&#x27;},
      { type: &#x27;number&#x27;, message: &#x27;age must be a number&#x27;}
    ]&#x22;
  &#x3E;
    &#x3C;el-input type=&#x22;age&#x22; v-model.number=&#x22;numberValidateForm.age&#x22; autocomplete=&#x22;off&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;submitForm(&#x27;numberValidateForm&#x27;)&#x22;&#x3E;Submit&#x3C;/el-button&#x3E;
    &#x3C;el-button @click=&#x22;resetForm(&#x27;numberValidateForm&#x27;)&#x22;&#x3E;Reset&#x3C;/el-button&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
&#x3C;script&#x3E;
  export default {
    data() {
      return {
        numberValidateForm: {
          age: &#x27;&#x27;
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&#x3E; {
          if (valid) {
            alert(&#x27;submit!&#x27;);
          } else {
            console.log(&#x27;error submit!!&#x27;);
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
            <p class="mt-2 text-lg">When an <code>el-form-item</code> is nested in another <code>el-form-item</code>, its label width will be <code>0</code>. You can set <code>label-width</code> on that <code>el-form-item</code> if needed.</p>
          </div>



          <div>
            <h3 class="mt-8x">Form Attributes
</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type"></span>
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues"></span>
                </template>
              </el-table-column>
              <el-table-column label="Default" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>

<div>
            <h3 class="mt-8x">
Form Methods

</h3>
            <el-table :data="formMethods" class="mt-2">
              <el-table-column label="Method" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters"></span>
                </template>
              </el-table-column>
           
            </el-table>
          </div>


<div>
            <h3 class="mt-8x">
Form Events


</h3>
            <el-table :data="formEvents" class="mt-2">
              <el-table-column label="Event Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
               <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>


          
<div>
            <h3 class="mt-8x">
Form-Item Attributes

</h3>
            <el-table :data="formItems" class="mt-2">
              <el-table-column label="Attribute" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type"></span>
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues"></span>
                </template>
              </el-table-column>
              <el-table-column label="Default" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>


          <div>
            <h3 class="mt-8x">Form-Item Slot

</h3>
            <el-table :data="formItemsSlot" class="mt-2">
              <el-table-column label="Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.name"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Form-Item Scoped Slot


</h3>
            <el-table :data="formItemsScopedSlot" class="mt-2">
              <el-table-column label="Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.name"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Form-Item Methods
</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Method" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Vue from "vue";
import clipboard from "@/utils/clipboard";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); //registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "FormValidation",
  components: {},
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };

    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formInline: {
        user: "",
        region: "",
      },

      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        },

        ruleForm1: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules1: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
numberValidateForm: {
          age: ''
        },
      attributeApi: [{"attribute":"model","description":"data of form component","type":"object","acceptedvalues":"—","default":"—"},{"attribute":"rules","description":"validation rules of form","type":"object","acceptedvalues":"—","default":"—"},{"attribute":"inline","description":"whether the form is inline","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"label-position","description":"position of label. If set to 'left' or 'right', <code>label-width</code> prop is also required","type":"string","acceptedvalues":"left / right / top","default":"right"},{"attribute":"label-width","description":"width of label, e.g. '50px'. All its direct child form items will inherit this value. Width <code>auto</code> is supported.","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"label-suffix","description":"suffix of the label","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"hide-required-asterisk","description":"whether required fields should have a red asterisk (star) beside their labels","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"show-message","description":"whether to show the error message","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"inline-message","description":"whether to display the error message inline with the form item","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"status-icon","description":"whether to display an icon indicating the validation result","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"validate-on-rule-change","description":"whether to trigger validation when the <code>rules</code> prop is changed","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"size","description":"control the size of components in this form","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"disabled","description":"whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' <code>disabled</code> prop","type":"boolean","acceptedvalues":"—","default":"false"}],
      formItemsScopedSlot: [{"name":"error","description":"Custom content to display validation message. The scope parameter is { error }"}],
      formItemsSlot: [{"name":"—","description":"content of Form Item"},{"name":"label","description":"content of label"}],
      formItems: [{"attribute":"prop","description":"a key of <code>model</code>. In the use of validate and resetFields method, the attribute is required","type":"string","acceptedvalues":"keys of model that passed to <code>form</code>","default":""},{"attribute":"label","description":"label","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"label-width","description":"width of label, e.g. '50px'. Width <code>auto</code> is supported.","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"required","description":"whether the field is required or not, will be determined by validation rules if omitted","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"rules","description":"validation rules of form","type":"object","acceptedvalues":"—","default":"—"},{"attribute":"error","description":"field error message, set its value and the field will validate error and show this message immediately","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"show-message","description":"whether to show the error message","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"inline-message","description":"inline style validate message","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"size","description":"control the size of components in this form-item","type":"string","acceptedvalues":"medium / small / mini","default":"-"}],
      formEvents: [{"eventname":"validate","description":"triggers after a form item is validated","parameters":"prop name of the form item being validated, whether validation is passed and the error message if not"}],
      formMethods: [{"method":"validate","description":"validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted","parameters":"Function(callback: Function(boolean, object))"},{"method":"validateField","description":"validate one or several form items","parameters":"Function(props: string | array, callback: Function(errorMessage: string))"},{"method":"resetFields","description":"reset all the fields and remove validation result","parameters":"—"},{"method":"clearValidate","description":"clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared","parameters":"Function(props: string | array)"}],
      eventApi: [{"method":"resetField","description":"reset current field and remove validation result","parameters":"—"},{"method":"clearValidate","description":"remove validation status of the field","parameters":"-"}],
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
  },
};
</script>