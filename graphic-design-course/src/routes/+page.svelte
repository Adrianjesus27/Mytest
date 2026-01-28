<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Accordion from "$lib/components/ui/accordion";
  
  // Mock data
  const modules = [
    { title: "Introduction to Design", description: "Learn the history and fundamentals." },
    { title: "Typography Mastery", description: "Understanding fonts, pairing, and hierarchy." },
    { title: "Color Theory", description: "Psychology of color and palette creation." },
    { title: "Layout & Composition", description: "Grids, balance, and visual flow." },
  ];

  const testimonials = [
    { name: "Alex Johnson", role: "Junior Designer", quote: "This course changed my career path completely!" },
    { name: "Sarah Lee", role: "Freelancer", quote: "The best investment I made for my portfolio." },
  ];
</script>

<div class="flex min-h-screen flex-col">
  <!-- Navbar -->
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-14 items-center">
      <div class="mr-4 hidden md:flex">
        <a class="mr-6 flex items-center space-x-2" href="/">
          <span class="hidden font-bold sm:inline-block">GraphicCourse</span>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
          <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="#curriculum">Curriculum</a>
          <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div class="w-full flex-1 md:w-auto md:flex-none">
          <!-- Search or empty -->
        </div>
        <nav class="flex items-center space-x-2">
          <Button variant="ghost" href="/login">Login</Button>
          <Button href="/signup">Get Started</Button>
        </nav>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <!-- Hero -->
    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="flex max-w-[980px] flex-col items-start gap-2">
        <Badge variant="outline" class="mb-2">New Course Launched</Badge>
        <h1 class="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Master Graphic Design <br class="hidden sm:inline" />
          from Scratch to Professional.
        </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground">
          A comprehensive course covering everything from design principles to advanced software techniques. 
          Start your creative journey today.
        </p>
      </div>
      <div class="flex gap-4">
        <Button size="lg" href="/signup">Enroll Now</Button>
        <Button size="lg" variant="outline" href="#curriculum">View Curriculum</Button>
      </div>
    </section>

    <Separator />

    <!-- Features -->
    <section id="features" class="container py-8 md:py-12 lg:py-24">
      <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Card.Root>
          <Card.Header>
            <Card.Title>Design Principles</Card.Title>
            <Card.Description>Learn the core rules of visual design.</Card.Description>
          </Card.Header>
          <Card.Content>
            Balance, contrast, emphasis, movement, pattern, rhythm, variety, and unity.
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Software Skills</Card.Title>
            <Card.Description>Master industry-standard tools.</Card.Description>
          </Card.Header>
          <Card.Content>
            Deep dive into Photoshop, Illustrator, and Figma for UI design.
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Portfolio Building</Card.Title>
            <Card.Description>Create real-world projects.</Card.Description>
          </Card.Header>
          <Card.Content>
            Build a portfolio that gets you hired by top agencies.
          </Card.Content>
        </Card.Root>
      </div>
    </section>

    <!-- Curriculum -->
    <section id="curriculum" class="container py-8 md:py-12">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Course Curriculum</h2>
        <div class="max-w-2xl mx-auto">
             <Accordion.Root type="single">
                {#each modules as module, i}
                    <Accordion.Item value="item-{i}">
                        <Accordion.Trigger>{module.title}</Accordion.Trigger>
                        <Accordion.Content>
                            {module.description}
                        </Accordion.Content>
                    </Accordion.Item>
                {/each}
             </Accordion.Root>
        </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="container py-8 md:py-12 lg:py-24 bg-muted/50 rounded-lg">
        <div class="mx-auto flex flex-col items-center justify-center gap-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl">Simple Pricing</h2>
            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                One time payment. Lifetime access.
            </p>
        </div>
        <div class="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-2 max-w-4xl mx-auto mt-8 bg-background shadow-sm">
             <div class="grid gap-6">
                <h3 class="text-xl font-bold sm:text-2xl">Standard Access</h3>
                <ul class="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                    <li class="flex items-center"><span class="mr-2">✓</span> Full Course Access</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Project Files</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Certificate</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Community Support</li>
                </ul>
             </div>
             <div class="flex flex-col gap-4 text-center md:text-left">
                 <div class="text-4xl font-bold">$49</div>
                 <p class="text-sm text-muted-foreground">One-time payment</p>
                 <Button size="lg" class="w-full">Get Started</Button>
             </div>
        </div>
    </section>
  </main>

  <footer class="py-6 md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by Teta.
      </p>
    </div>
  </footer>
</div>