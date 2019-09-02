<template>
  <div class="content">
    <h3>This is {{mode}} mode</h3>
    <div class="image-grid">
      <div class="col">
        <img
          src="https://images.pexels.com/photos/1148572/pexels-photo-1148572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt
        />
      </div>
      <div class="col">
        <img
          src="https://images.pexels.com/photos/944735/pexels-photo-944735.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt
        />
      </div>
      <div class="col">
        <img
          src="https://images.pexels.com/photos/2179389/pexels-photo-2179389.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt
        />
      </div>
    </div>
    <p
      class="para"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ut quo, error iste doloribus suscipit nihil illum, eligendi deserunt laboriosam recusandae. Rerum eaque obcaecati repellat labore amet quaerat nostrum mollitia voluptate est blanditiis alias, libero corporis, modi officiis tempora qui distinctio exercitationem, cum ad? Ducimus sequi illum voluptate sint maiores!</p>
  </div>
</template>

<script>
export default {
  props: ["mode"]
};
</script>

<style scoped>
.content {
  padding: 25px;
}
.content h3 {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 25px;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

.image-grid .col img {
  width: 100%;
}

.para {
  width: 100%;
  max-width: 600px;
  margin: 25px auto 0;
}
</style>