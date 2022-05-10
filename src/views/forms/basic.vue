<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Form</span>
              <span class="card-sub-label"></span>
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">
            Form consists of
            <code>input</code>,
            <code>radio</code>,
            <code>select</code>,
            <code>checkbox</code> and so on. With form, you can collect, verify and submit data.
          </p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              It includes all kinds of input items, such as
              <code>input</code>,
              <code>select</code>,
              <code>radio</code> and
              <code>checkbox</code>.
            </p>
            <p class="mt-2 text-lg">
              In each
              <code>form</code> component, you need a
              <code>form-item</code> field to be the container of your input item.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-form ref="form" :model="form" label-width="120px">
                  <el-form-item label="Activity name">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="Please select your zone">
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Activity time">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="Pick a date"
                        v-model="form.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-col>
                    <el-col class="text-center" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="Pick a time"
                        v-model="form.date2"
                        style="width: 100%;"
                      ></el-time-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery"></el-switch>
                  </el-form-item>
                  <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="Online activities" name="type"></el-checkbox>
                      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                      <el-checkbox label="Offline activities" name="type"></el-checkbox>
                      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="Sponsor"></el-radio>
                      <el-radio label="Venue"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Activity form">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form ref=&#x22;form&#x22; :model=&#x22;form&#x22; label-width=&#x22;120px&#x22;&#x3E;
  &#x3C;el-form-item label=&#x22;Activity name&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;form.name&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity zone&#x22;&#x3E;
    &#x3C;el-select v-model=&#x22;form.region&#x22; placeholder=&#x22;please select your zone&#x22;&#x3E;
      &#x3C;el-option label=&#x22;Zone one&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;el-option label=&#x22;Zone two&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
    &#x3C;/el-select&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity time&#x22;&#x3E;
    &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
      &#x3C;el-date-picker type=&#x22;date&#x22; placeholder=&#x22;Pick a date&#x22; v-model=&#x22;form.date1&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-date-picker&#x3E;
    &#x3C;/el-col&#x3E;
    &#x3C;el-col class=&#x22;line&#x22; :span=&#x22;2&#x22;&#x3E;-&#x3C;/el-col&#x3E;
    &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
      &#x3C;el-time-picker placeholder=&#x22;Pick a time&#x22; v-model=&#x22;form.date2&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-time-picker&#x3E;
    &#x3C;/el-col&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Instant delivery&#x22;&#x3E;
    &#x3C;el-switch v-model=&#x22;form.delivery&#x22;&#x3E;&#x3C;/el-switch&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity type&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;form.type&#x22;&#x3E;
      &#x3C;el-checkbox label=&#x22;Online activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Promotion activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Offline activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Simple brand exposure&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Resources&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;form.resource&#x22;&#x3E;
      &#x3C;el-radio label=&#x22;Sponsor&#x22;&#x3E;&#x3C;/el-radio&#x3E;
      &#x3C;el-radio label=&#x22;Venue&#x22;&#x3E;&#x3C;/el-radio&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity form&#x22;&#x3E;
    &#x3C;el-input type=&#x22;textarea&#x22; v-model=&#x22;form.desc&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;onSubmit&#x22;&#x3E;Create&#x3C;/el-button&#x3E;
    &#x3C;el-button&#x3E;Cancel&#x3C;/el-button&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
&#x3C;script&#x3E;
  export default {
    data() {
      return {
        form: {
          name: &#x27;&#x27;,
          region: &#x27;&#x27;,
          date1: &#x27;&#x27;,
          date2: &#x27;&#x27;,
          delivery: false,
          type: [],
          resource: &#x27;&#x27;,
          desc: &#x27;&#x27;
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(&#x27;submit!&#x27;);
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Inline form</h3>
            <p
              class="mt-2 text-lg"
            >When the vertical space is limited and the form is relatively simple, you can put it in one line.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>inline</code> attribute to
              <code>true</code> and the form will be inline.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="Approved by">
                    <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-select v-model="formInline.region" placeholder="Activity zone">
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form :inline=&#x22;true&#x22; :model=&#x22;formInline&#x22; class=&#x22;demo-form-inline&#x22;&#x3E;
  &#x3C;el-form-item label=&#x22;Approved by&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;formInline.user&#x22; placeholder=&#x22;Approved by&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity zone&#x22;&#x3E;
    &#x3C;el-select v-model=&#x22;formInline.region&#x22; placeholder=&#x22;Activity zone&#x22;&#x3E;
      &#x3C;el-option label=&#x22;Zone one&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;el-option label=&#x22;Zone two&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
    &#x3C;/el-select&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;onSubmit&#x22;&#x3E;Query&#x3C;/el-button&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Alignment</h3>
            <p
              class="mt-2 text-lg"
            >Depending on your design, there are several different ways to align your label element.</p>
            <p class="mt-2 text-lg">
              The
              <code>label-position</code> attribute decides how labels align, it can be
              <code>top</code> or
              <code>left</code>. When set to
              <code>top</code>, labels will be placed at the top of the form field.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-radio-group v-model="labelPosition" size="small">
                  <el-radio-button label="left">Left</el-radio-button>
                  <el-radio-button label="right">Right</el-radio-button>
                  <el-radio-button label="top">Top</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px;"></div>
                <el-form
                  :label-position="labelPosition"
                  label-width="100px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="Name">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity form">
                    <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-radio-group v-model=&#x22;labelPosition&#x22; size=&#x22;small&#x22;&#x3E;
  &#x3C;el-radio-button label=&#x22;left&#x22;&#x3E;Left&#x3C;/el-radio-button&#x3E;
  &#x3C;el-radio-button label=&#x22;right&#x22;&#x3E;Right&#x3C;/el-radio-button&#x3E;
  &#x3C;el-radio-button label=&#x22;top&#x22;&#x3E;Top&#x3C;/el-radio-button&#x3E;
&#x3C;/el-radio-group&#x3E;
&#x3C;div style=&#x22;margin: 20px;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;el-form :label-position=&#x22;labelPosition&#x22; label-width=&#x22;100px&#x22; :model=&#x22;formLabelAlign&#x22;&#x3E;
  &#x3C;el-form-item label=&#x22;Name&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;formLabelAlign.name&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity zone&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;formLabelAlign.region&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
  &#x3C;el-form-item label=&#x22;Activity form&#x22;&#x3E;
    &#x3C;el-input v-model=&#x22;formLabelAlign.type&#x22;&#x3E;&#x3C;/el-input&#x3E;
  &#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
                </code>
            </pre>
            </div>
          </div>

<div>
            <h3 class="mt-8x">
              Size control

            </h3>
<p class="mt-2 text-lg">All components in a Form inherit their <code>size</code> attribute from that Form. Similarly, FormItem also has a <code>size</code> attribute.</p>
<p class="mt-2 text-lg">Still you can fine tune each component's <code>size</code> if you don't want that component to inherit its size from From or FormIten.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <el-form-item label="Activity name">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="sizeForm.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
      <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="Sponsor"></el-radio>
      <el-radio border label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-form ref=&#x22;form&#x22; :model=&#x22;sizeForm&#x22; label-width=&#x22;120px&#x22; size=&#x22;mini&#x22;&#x3E;
&#x3C;el-form-item label=&#x22;Activity name&#x22;&#x3E;
  &#x3C;el-input v-model=&#x22;sizeForm.name&#x22;&#x3E;&#x3C;/el-input&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;el-form-item label=&#x22;Activity zone&#x22;&#x3E;
  &#x3C;el-select v-model=&#x22;sizeForm.region&#x22; placeholder=&#x22;please select your zone&#x22;&#x3E;
    &#x3C;el-option label=&#x22;Zone one&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
    &#x3C;el-option label=&#x22;Zone two&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;el-form-item label=&#x22;Activity time&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
    &#x3C;el-date-picker type=&#x22;date&#x22; placeholder=&#x22;Pick a date&#x22; v-model=&#x22;sizeForm.date1&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-date-picker&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col class=&#x22;line&#x22; :span=&#x22;2&#x22;&#x3E;-&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
    &#x3C;el-time-picker placeholder=&#x22;Pick a time&#x22; v-model=&#x22;sizeForm.date2&#x22; style=&#x22;width: 100%;&#x22;&#x3E;&#x3C;/el-time-picker&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;el-form-item label=&#x22;Activity type&#x22;&#x3E;
  &#x3C;el-checkbox-group v-model=&#x22;sizeForm.type&#x22;&#x3E;
    &#x3C;el-checkbox-button label=&#x22;Online activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox-button&#x3E;
    &#x3C;el-checkbox-button label=&#x22;Promotion activities&#x22; name=&#x22;type&#x22;&#x3E;&#x3C;/el-checkbox-button&#x3E;
  &#x3C;/el-checkbox-group&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;el-form-item label=&#x22;Resources&#x22;&#x3E;
  &#x3C;el-radio-group v-model=&#x22;sizeForm.resource&#x22; size=&#x22;medium&#x22;&#x3E;
    &#x3C;el-radio border label=&#x22;Sponsor&#x22;&#x3E;&#x3C;/el-radio&#x3E;
    &#x3C;el-radio border label=&#x22;Venue&#x22;&#x3E;&#x3C;/el-radio&#x3E;
  &#x3C;/el-radio-group&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;el-form-item size=&#x22;large&#x22;&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;onSubmit&#x22;&#x3E;Create&#x3C;/el-button&#x3E;
  &#x3C;el-button&#x3E;Cancel&#x3C;/el-button&#x3E;
&#x3C;/el-form-item&#x3E;
&#x3C;/el-form&#x3E;
                </code>
            </pre>
            </div>
          </div>


<div>
            <h3 class="mt-8x">
Delete or add form items dynamically

            </h3>
            <p class="mt-2 text-lg">In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

</p>


            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
    <el-button @click="addDomain">New domain</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
                  
                </code>
            </pre>
            </div>
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
  name: "FormBasic",
  components: {},
  data() {
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
         dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
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
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
  },
};
</script>