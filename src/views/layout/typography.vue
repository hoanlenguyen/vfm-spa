<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span class="card-label">Typography</span>
              <span
                class="card-sub-label"
              >Documentation and examples for typography, including global settings, headings, body text, lists, and more.</span>
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <div class="d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center">
            <p style="font-size: 16rem; margin-right: 50px;">Aa</p>
            <div>
              <p class="" style="font-size: 2.4rem; font-weight: 300">Light - 300</p>
              <p class="mt-2x" style="font-size: 2.4rem; font-weight: 400">Regular - 400</p>
              <p class="mt-2x" style="font-size: 2.4rem; font-weight: 500">Medium - 500</p>
            </div>
          </div>
          <p
            class="text-xl c-grey mt-5"
          >Poppins is one of the new comers to this long tradition. With support for the Devanagari and Latin writing systems, it is an internationalist take on the genre.</p>
          <hr class="section-divider" />

          <h3 class="mt-8x">Glyphs</h3>
          <p
            class="mt-2x"
            style="font-size: 2.4rem; letter-spacing: .8rem; word-break: break-all;"
          >ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\&lt;-+÷×=>®©$€£¥¢:;,.*</p>

          <h3 class="mt-8x">Headings</h3>
          <p class="mt-2x text-lg">
            All HTML headings,
            <code>h1</code> through
            <code>h6</code>, are available.
          </p>
          <el-table :data="headings" class="mt-2">
            <el-table-column label="Example" min-width="300px">
              <template slot-scope="scope">
                <span v-html="scope.row.example"></span>
              </template>
            </el-table-column>
            <el-table-column label="Heading">
              <template slot-scope="scope">
                <span>h{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Tag">
              <template slot-scope="scope">
                <code>{{ scope.row.tag }}</code>
              </template>
            </el-table-column>
            <el-table-column label="Size">
              <template slot-scope="scope">
                <span>{{ scope.row.size }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Weight">
              <template slot-scope="scope">
                <span>{{ scope.row.weight }}</span>
              </template>
            </el-table-column>
          </el-table>


<h3 class="mt-8x">Font Convention, Body and Paragraphs</h3>
<p class="mt-2x text-lg">
            We create a font convention to ensure the best presentation across different platforms.
          </p>
          <el-table :data="texts" class="mt-2">
            <el-table-column label="Level" min-width="300px">
              <template slot-scope="scope">
                <span v-html="scope.row.example"></span>
              </template>
            </el-table-column>
            <el-table-column label="Tag">
              <template slot-scope="scope">
                <code>{{ scope.row.tag }}</code>
              </template>
            </el-table-column>
            <el-table-column label="Class" width="150px">
              <template slot-scope="scope">
                <code>{{ scope.row.class }}</code>
              </template>
            </el-table-column>
            <el-table-column label="Size">
              <template slot-scope="scope">
                <span>{{ scope.row.size }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Weight">
              <template slot-scope="scope">
                <span>{{ scope.row.weight }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import clipboard from "@/utils/clipboard";

export default {
  name: "Guides",
  data() {
    return {
      headings: [
        {
          id: 1,
          example: "<h1>h1. Heading 1</h1>",
          size: "4rem",
          weight: "500",
          tag: 'h1',
        },
        {
          id: 2,
          example: "<h2>h2. Heading 2</h2>",
          size: "3.2rem",
          weight: "500",
          tag: 'h2',
        },
        {
          id: 3,
          example: "<h3>h3. Heading 3</h3>",
          size: "2.4rem",
          weight: "500",
          tag: 'h3',
        },
        {
          id: 4,
          example: "<h4>h4. Heading 4</h4>",
          size: "2rem",
          weight: "500",
          tag: 'h4',
        },
        {
          id: 5,
          example: "<h5>h5. Heading 5</h5>",
          size: "1.6rem",
          weight: "500",
          tag: 'h5',
        },
        {
          id: 6,
          example: "<h6>h6. Heading 6</h6>",
          size: "1.2rem",
          weight: "500",
          tag: 'h6',
        }
      ],

      texts: [
        {
          id: 1,
          example: "<p class='text-xxl'>Extra XLarge</p>",
          size: "2rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-xxl'
        },
        {
          id: 2,
         example: "<p class='text-xl'>Extra Large</p>",
          size: "1.8rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-xl'
        },
        {
          id: 3,
          example: "<p class='text-lg'>Large</p>",
          size: "1.6rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-lg'
        },
        {
          id: 4,
          example: "<p class='text-md'>Medium - Body</p>",
          size: "1.4rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-md'
        },
        {
          id: 5,
          example: "<p class='text-sm'>Small</p>",
          size: "1.2rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-sm'
        },
        {
          id: 6,
          example: "<p class='text-xs'>Extra Small</p>",
          size: "1rem",
          weight: "300,400",
          tag: 'p, span',
          class: '.text-xs'
        }
      ]
    };
  }
};
</script>