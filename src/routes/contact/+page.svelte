<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
  import { site } from '#lib/config/site.ts';
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171. Livingood Wellness Center is a home massage studio at 157 Marlboro Street, Hudson, MA 01749. By appointment only."
/>

<PageHeader
  eyebrow="Contact"
  title="Get in touch."
  lede="The fastest way to reach Mariya is a call or a text. Email works too, just a little slower."
/>

<section class="section">
  <div class="container-site grid gap-6 lg:grid-cols-3">
    <Card.Root variant="accent" class="gap-4 lg:col-span-2">
      <Card.Header>
        <p class="eyebrow text-accent-foreground/70">Call or text</p>
        <Card.Title class="text-3xl">{site.phone}</Card.Title>
      </Card.Header>
      <Card.Content>
        <p class="max-w-md">
          For appointments, questions, or if you are not sure which session is right. By appointment only, so
          please reach out before dropping by.
        </p>
      </Card.Content>
      <Card.Footer class="flex-wrap">
        <Button href={site.phoneHref} variant="outline">
          <PhoneIcon data-icon="inline-start" aria-hidden="true" />
          Call {site.phone}
        </Button>
        <Button href={site.smsHref} variant="outline">
          <MessageSquareIcon data-icon="inline-start" aria-hidden="true" />
          Send a text
        </Button>
      </Card.Footer>
    </Card.Root>

    <Card.Root class="gap-4">
      <Card.Header>
        <p class="eyebrow text-muted-foreground">Email</p>
        <Card.Title>Write to Mariya</Card.Title>
      </Card.Header>
      <Card.Content>
        <a class="w-fit break-all font-semibold underline decoration-accent decoration-2 underline-offset-4" href="mailto:{site.email}">
          {site.email}
        </a>
      </Card.Content>
      <Card.Footer>
        <Button href="mailto:{site.email}" variant="outline" size="sm">
          <MailIcon data-icon="inline-start" aria-hidden="true" />
          Email
        </Button>
      </Card.Footer>
    </Card.Root>

    <Card.Root variant="secondary" class="gap-4 lg:col-span-1">
      <Card.Header>
        <p class="eyebrow text-secondary-foreground/70">Visit</p>
        <Card.Title>The studio</Card.Title>
      </Card.Header>
      <Card.Content>
        <address class="not-italic">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="text-sm text-secondary-foreground/80">{site.address.note}. Please book before you come.</p>
      </Card.Content>
      <Card.Footer>
        <Button href={site.mapsUrl} target="_blank" rel="noopener" variant="outline" size="sm">
          <MapPinIcon data-icon="inline-start" aria-hidden="true" />
          Open in Google Maps
          <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
        </Button>
      </Card.Footer>
    </Card.Root>

    <Card.Root variant="flat" class="gap-4 lg:col-span-2">
      <Card.Header>
        <p class="eyebrow text-muted-foreground">Hours</p>
        <Card.Title>By appointment</Card.Title>
      </Card.Header>
      <Card.Content>
        <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 sm:grid-cols-[auto_1fr_auto_1fr]">
          {#each site.hours as { days, time } (days)}
            <dt class="font-semibold">{days}</dt>
            <dd class="text-muted-foreground">{time}</dd>
          {/each}
        </dl>
      </Card.Content>
    </Card.Root>
  </div>
</section>

<CtaBand title="Ready to book?" text="Pick a service and a time on MassageBook. New clients get a short intake form by email." />
