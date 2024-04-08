<script lang="ts" setup>
const items = [
  { id: 1, msg: "1" },
  { id: 2, msg: "2" },
  { id: 3, msg: "3" },
  { id: 4, msg: "4" },
  { id: 5, msg: "5" },
  { id: 6, msg: "6" },
  { id: 7, msg: "7" },
  { id: 8, msg: "8" },
  { id: 9, msg: "9" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
  { id: 10, msg: "10" },
];
function itemTemplate(args: any) {
  return args.item.id % 2 === 0 ? "even" : "odd";
}
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" />
      </ActionBar>

      <GridLayout>
        <CollectionView
          row="1"
          ref="collectionView"
          :items="items"
          height="100%"
          :itemTemplateSelector="itemTemplate"
        >
          <template #even="{ item }">
            <GridLayout class="" marginTop="120">
              <Label
                col="1"
                horizontalAlignment="left"
                textWrap="true"
                :text="'even left ' + item.msg"
              >
              </Label>
            </GridLayout>
          </template>
          <template #odd="{ item }">
            <GridLayout class="" marginTop="120">
              <Label
                col="1"
                horizontalAlignment="right"
                textWrap="true"
                :text="'odd right ' + item.msg"
              >
              </Label>
            </GridLayout>
          </template>
        </CollectionView>
      </GridLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
