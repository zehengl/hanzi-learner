<script>
  import { Modal, Card, Button } from "svelte-chota";
  import { SettingsIcon } from "svelte-feather-icons";
  let open = false;
  const show = () => (open = true);
  const hide = () => (open = false);
  const saveConfig = () => {
    hide();
  };
</script>

<span on:click={show}>
  <SettingsIcon size="1x" />
</span>

<Modal bind:open>
  <Card>
    <h4 slot="header">Settings</h4>
    <p>Here goes the config...</p>
    <div slot="footer" class="is-right">
      <Button clear on:click={hide}>Cancel</Button>
      <Button primary on:click={saveConfig}>Confirm</Button>
    </div>
  </Card>
</Modal>
