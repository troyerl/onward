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
  import fb from '../fb'
  import {mapState} from "vuex";
  export default {
    props: ['task', 'ms'],
    filters: {
      first5: (val) => {
        return val.charAt(0) === '#' ? val.substr(0, 6) : val.substr(0, 5)
      }
    },
    name: "Resources",
    data() {
      return {
        i: 0,
        fakeResources: [
          {
            name: 'Job Hunters Co',
            website: 'https://jobhunt.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at culpa cumque cupiditate dicta excepturi exercitationem expedita facere id, ipsa minus mollitia nam quia ratione sapiente similique sit voluptatum.',
            addressLine1: '123 Main St',
            addressLine2: 'Indinapolis, IN 46204'
          },
          {
            name: 'Resume Help Inc',
            website: 'https://resumehelp.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at culpa cumque cupiditate dicta excepturi exercitationem expedita facere id, ipsa minus mollitia nam quia ratione sapiente similique sit voluptatum.',
            addressLine1: '456 First St',
            addressLine2: 'Indinapolis, IN 46204'
          }
        ],
      }
    },
    computed: {
      matchedResources() {
        this.resources.forEach(res => {
          res.keywords.forEach(kw => {
            if (this.task.title.toLowerCase().includes(kw.toLowerCase())) {
              return res.data.slice(0, 2)
            }
          })
        })
      },

      ...mapState(['resources'])
    }
  }
</script>