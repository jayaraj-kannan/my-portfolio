<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-row class="fill-height">
        <v-col class="text-center">
          <v-img height="300" src="../assets/images/color.png" />

          <div class="text-body-2 font-weight-light note-1 ">Full stack Java Developer ● Enovia Developer</div>

          <h3 class="text-h2 note-2">Jayaraj Kannan</h3>
          <v-chip class="ma-2" color="#8957e5" prepend-icon="mdi mdi-github">
            github
          </v-chip>
          <v-chip class="ma-2" href="https://www.linkedin.com/in/jayaraj-kannan-58922b111/" target="_blank"
            color="#0a66c2" prepend-icon="mdi mdi-linkedin">
            linkedIn
          </v-chip>
          <v-chip class="ma-2" color="#1877f2" prepend-icon="mdi mdi-facebook">
            facebook
          </v-chip>
          <v-chip class="ma-2" color="#C13584" prepend-icon="mdi mdi-instagram">
            instagram
          </v-chip>
          <v-chip class="ma-2" color="#0a66c2" prepend-icon="mdi mdi-twitter">
            twitter
          </v-chip>
        </v-col>
        <v-col>
          <v-card class="mx-auto fill-height cus-card" subtitle="check out my personal and proffosinal details"
            title="About me" elevation="0">
            <v-card>
              <v-expansion-panels>
                <v-expansion-panel title="Skill">
                  <v-expansion-panel-text>
                    <v-chip v-for="(item, index) in skill" :key="index" class="ma-1">{{item}}</v-chip>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="Work Experience">
                  <v-expansion-panel-text>
                    <v-timeline align="start" side="end">
                      <v-timeline-item dot-color="teal-lighten-3" size="small">
                        <template v-slot:opposite>
                          <div class="pt-1 headline font-weight-bold text-green"> Aug 2023 - Till </div>
                        </template>
                        <div>
                          <strong>Renault Nissan</strong>
                          <div class="text-caption mb-2">
                            Chengalpattu, Tamilnadu, India.
                          </div>
                          <div class="text-caption">
                            Working as an Asisstant Manager and Lead Developer in RNTBCI.
                          </div>
                          <span>
                            <v-chip class="ma-1" size="x-small">3DExperience</v-chip>
                            <v-chip class="ma-1" size="x-small">Spring Boot</v-chip>
                            <v-chip class="ma-1" size="x-small">Widget</v-chip>
                            <v-chip class="ma-1" size="x-small">3D Dashboard customization</v-chip>
                            <v-chip class="ma-1" size="x-small">13x customization</v-chip>
                            <v-chip class="ma-1" size="x-small">REST</v-chip>
                            <v-chip class="ma-1" size="x-small">vue.js</v-chip>
                          </span>
                        </div>
                      </v-timeline-item>

                      <v-timeline-item dot-color="pink" size="small">
                        <template v-slot:opposite>
                          <div class="pt-1 headline font-weight-bold text-red">Aug 2021 - Aug 2023</div>
                        </template>
                        <div>
                          <strong>Dassault Systems</strong>
                          <div class="text-caption mb-2">
                            Bangalore, Karnataka, India.
                          </div>
                          <div class="text-caption">
                            Working as an Asisstant Manager and Lead Developer in RNTBCI.
                          </div>
                          <span>
                            <v-chip class="ma-1" size="x-small">3DExperience</v-chip>
                            <v-chip class="ma-1" size="x-small">Spring Boot</v-chip>
                            <v-chip class="ma-1" size="x-small">Widget</v-chip>
                            <v-chip class="ma-1" size="x-small">3D Dashboard customization</v-chip>
                            <v-chip class="ma-1" size="x-small">13x customization</v-chip>
                            <v-chip class="ma-1" size="x-small">REST</v-chip>
                            <v-chip class="ma-1" size="x-small">vue.js</v-chip>
                          </span>
                        </div>
                      </v-timeline-item>
                      <v-timeline-item dot-color="pink" size="small">
                        <template v-slot:opposite>
                          <div class="pt-1 headline font-weight-bold text-red">Sep 2018 - Aug 2021</div>
                        </template>
                        <div>
                          <strong>Intelizign</strong>
                          <div class="text-caption mb-2">
                            Chennai, Tamilnadu, India.
                          </div>
                          <div class="text-caption">
                            Working as an Asisstant Manager and Lead Developer in RNTBCI.
                          </div>
                          <span>
                            <v-chip class="ma-1" size="x-small">3DExperience</v-chip>
                            <v-chip class="ma-1" size="x-small">Spring Boot</v-chip>
                            <v-chip class="ma-1" size="x-small">Widget</v-chip>
                            <v-chip class="ma-1" size="x-small">3D Dashboard customization</v-chip>
                            <v-chip class="ma-1" size="x-small">13x customization</v-chip>
                            <v-chip class="ma-1" size="x-small">REST</v-chip>
                            <v-chip class="ma-1" size="x-small">vue.js</v-chip>
                          </span>
                        </div>
                      </v-timeline-item>
                      <v-timeline-item dot-color="pink" size="small">
                        <template v-slot:opposite>
                          <div class="pt-1 headline font-weight-bold text-red">May 2016 - Aug 2018</div>
                        </template>
                        <div>
                          <strong>AVFA Technologies</strong>
                          <div class="text-caption mb-2">
                            Cuddalore, Tamilnadu, India.
                          </div>
                          <div class="text-caption">
                            Working as an Asisstant Manager and Lead Developer in RNTBCI.
                          </div>
                          <span>
                            <v-chip class="ma-1" size="x-small">3DExperience</v-chip>
                            <v-chip class="ma-1" size="x-small">Spring Boot</v-chip>
                            <v-chip class="ma-1" size="x-small">Widget</v-chip>
                            <v-chip class="ma-1" size="x-small">3D Dashboard customization</v-chip>
                            <v-chip class="ma-1" size="x-small">13x customization</v-chip>
                            <v-chip class="ma-1" size="x-small">REST</v-chip>
                            <v-chip class="ma-1" size="x-small">vue.js</v-chip>
                          </span>
                        </div>
                      </v-timeline-item>


                    </v-timeline></v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="Personal"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>
<script lang="ts" setup>

const skill = [
  'Enovia', '3dExperience', 'core java', 'css', 'javascript', 'vue.js', 'HTML5',
]
</script>