<template>
  <div>
    <div :id="'t' + task.ref.id | first5" class="collapse" aria-labelledby="headingOne"
         :data-parent="'#m' + ms.ref.id | first5">
      <div class="card-body bg-light">
        <p class="text-info">Perhaps these resources would help you:</p>
        <div class="card my-1" v-for="res in fakeResources">
          <div class="card-body">
            <p class="font-weight-bold">{{res.name}}</p>
            <p>{{res.addressLine1}}<br>{{res.addressLine2}}</p>
            <p>{{res.desc}}</p>
            <a :href="res.website">{{res.website}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import firebase from 'firebase'
  export default {
    props: ['task', 'ms'],
    filters: {
      first5: (val) => {
        return val.charAt(0) === '#' ? val.substr(0, 6) : val.substr(0, 5)
      }
    },
    name: "Resources",
    computed: {
      setState() {
        this.resources.map
      }
    },
    data() {
      return {
        state: [],
        resources: [
          {
            ref: firebase.db.collection('data').doc('job').collection('resources'),
            keywords: ['Apply', 'Application', 'app', 'Job', 'Work', 'resume', 'profession', 'position']
          },
          {
            ref: firebase.db.collection('data').doc('education').collection('resources'),
            keywords: ['Education', 'School' , 'classes', 'career', 'GED']
          }
        ]
      }
    }
  }
</script>