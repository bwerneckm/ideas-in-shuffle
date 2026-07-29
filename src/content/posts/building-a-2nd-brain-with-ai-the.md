---
title: "Building a 2nd brain with AI: The infrastructure approach to personal knowledge"
slug: "building-a-2nd-brain-with-ai-the"
date: 2025-11-02
tag: AI
lang: "en"
excerpt: "The Fragmentation Problem"
cover: "seafoam"
---

## The Fragmentation Problem

I spent three years losing thoughts across seventeen applications. Meeting notes lived in Notion. Article highlights scattered across Pocket, Instapaper, and browser bookmarks. Personal reflections fragmented between Apple Notes and Google Docs. Every time I needed to synthesise an idea, I’d open six tabs, copy-paste excerpts, and lose context switching between proprietary formats.

The breaking point came during a product meeting. Someone asked about a competitor analysis I’d written. I knew I’d captured detailed notes—I could picture the document. But I couldn’t remember which app. Twenty minutes of searching later, I found fragments across three services. None connected. None searchable together. The system had failed.

That failure forced a question: What if personal knowledge management borrowed from software infrastructure design?

## The Core Architecture

Modern software development solved the fragmentation problem decades ago. Version control tracks every change. Plain text files ensure permanence. Search spans entire codebases. The question was whether these principles could apply to personal knowledge.

The architecture I built has four layers:

**Layer 0: Storage** – Plain markdown files in a local folder structure. No proprietary formats. No vendor lock-in. Complete ownership.

**Layer 1: Version Control** – Git tracks every change with full history. Every note, every edit, permanently preserved. Branch experiments, revert mistakes, collaborate when needed.

**Layer 2: Interfaces** – Cursor (an AI-powered IDE) for primary interaction. Obsidian for visual browsing and graph views. Both read the same files; neither owns them.

**Layer 3: Intelligence** – Claude, an AI assistant configured with vault-aware context. Understands the entire knowledge graph. Helps synthesise across thousands of notes.

This isn’t a metaphor. I literally use an IDE as my note-taking interface. The system treats knowledge like code: versioned, searchable, refactorable at scale.

![](/images/posts/273a0633_2550x1386.png)

## The Folder Taxonomy

The structure follows active project domains:

```
📂 Vault/
├── Areas/              # Active focus domains
│   ├── Work/           # Professional projects
│   ├── Personal/       # Life management
│   └── Writing/        # Content production pipeline
├── Readwise/           # Auto-synced reading highlights
├── Daily Notes/        # Daily capture
├── Templates/          # Reusable structures
└── Archive/            # Completed projects
```

The Writing subdirectory implements a five-stage pipeline:

1. **Sketches** – Capture every spark without judgement (no promotion criteria)
2. **Long Ideas** – Develop promising concepts (3+ related sketches → promotion)
3. **Research** – Accumulate supporting knowledge (outlined argument → promotion)
4. **Drafts** – Active article writing (complete first draft → promotion)
5. **Ready to Publish** – Production-ready content (final edit complete → publish)

Each stage has explicit promotion criteria. Nothing gets lost. Promising ideas surface naturally through structured review.

## How Information Moves Through the System

### Reading Integration Flow

Every morning, highlights from Kindle, PDFs, and web articles appear in my vault:

1. Highlight in any reading tool
2. Readwise syncs overnight to `/Readwise/` folder
3. Notes appear as markdown with full source context and metadata
4. Claude synthesises insights across sources on request

No manual copying. Zero clipboard operations. Everything searchable and linkable.

### Meeting Knowledge Flow

After every meeting:

1. Granola AI transcribes and summarises
2. Export to markdown with key decisions and action items
3. Import to vault using meeting template (includes attendees, decisions, links to projects)
4. Link to relevant project notes and people pages

The template enforces structure:

```
# [Meeting Title] - [Date]

## Attendees
- [Name] - [Role]

## Key Decisions
- Decision 1
- Decision 2

## Action Items
- [ ] Task → [[Linked Project]]

## Context Links
- Previous meeting: [[Link]]
- Related project: [[Link]]
```

### Daily Thinking Flow

Each morning:

1. Create daily note from template (includes prompts: “What’s on my mind?”, “What did I capture yesterday?”, “What needs attention?”)
2. Review yesterday’s captures
3. Promote sketches through writing pipeline
4. Ask Claude to identify emerging patterns across the week

The daily template includes git commit automation. Every session ends with changes versioned automatically.

### Writing Production Flow

When producing content:

1. Review Writing Pipeline Dashboard (shows counts per stage, recently updated items)
2. Select a draft from stage 4
3. Open in Cursor with Claude context
4. Ask Claude to synthesise research from vault
5. Write with AI assistance for structure and synthesis
6. Move to stage 5 when complete

## Concrete Workflow: This Article’s Production

Let me walk through how this article came to exist:

**Day 1** – Captured sketch: “Using Cursor for non-coding tasks”. Just a title. Saved to `/Areas/Writing/1-Sketches/cursor-non-coding.md`.

**Day 3** – Promoted to Long Ideas after noticing three related sketches about AI tools and knowledge work. Created outline structure. Used Claude in Cursor:

```
Me: “Review my sketches about AI tools and knowledge work. What patterns emerge?”

Claude: “I found four sketches:
- ‘Cursor for non-coding tasks’ (you)
- ‘Context is all you need’ (you, 3 days ago)
- ‘AI-powered writing pipeline’ (you, last week)
- Highlights from ‘Building a Second Brain’ (Readwise)

Pattern: You’re exploring how developer tools apply to knowledge work. The common thread is treating knowledge like code—versioned, searchable, refactorable.”
```

**Day 5** – Research phase. Claude helped analyse my vault structure, identify key workflows, and gather examples from actual usage. Created research document at `/Areas/Writing/3-Research/pkm-system-research.md` with 2,400 words of synthesised vault insights.

**Day 7** – Moved to Drafts. Writing session in Cursor:

```
Me: “Help me structure an article about this PKM system. Audience: technical people who’ve felt knowledge fragmentation pain.”

Claude: “Structure suggestion:
1. Name the fragmentation problem (relatable friction)
2. Describe the architecture (layers, like a tech stack)
3. Show information flows (like data pipelines)
4. Provide concrete workflow example (numbered steps with specifics)
5. Address constraints and failure modes
6. Close with implementation path”
```

Wrote 3,200 words in one session with Claude helping synthesise examples from the research doc.

**Day 8** – Final polish. This version.

The entire production happened inside the vault. Every stage versioned. Every decision preserved. Claude had full context because the context *is* the vault.

## The Cursor Rules That Make It Work

The `.cursorrules` file at vault root contains instructions for Cursor’s AI:

```
# Git Automation
After each editing session:
1. Stage all changed files in /Areas/
2. Generate commit message describing changes
3. Commit automatically

# Vault Structure
Enforce:
- All notes include YAML frontmatter (tags, created, updated dates)
- Meeting notes use meeting template
- Writing pipeline files stay in correct stage folders
- Links use wiki-style [[brackets]]

# Privacy
Never commit:
- /Personal/Private/
- /Work/Confidential/
- Files marked with #private tag
```

This automation means I write, and the system handles versioning. No manual git commands. No deciding what to commit. The IDE does it.

## The AI Configuration That Matters

Claude in Cursor has two operating modes, configured via prompts:

**Thinking Mode** – For problem-solving and analysis:

- Ask clarifying questions first
- Suggest multiple perspectives
- Map arguments to vault notes
- Identify gaps in reasoning

**Writing Mode** – For content creation:

- Understand the five-stage writing pipeline
- Synthesise research from vault
- Suggest structure before drafting
- Link to relevant notes as sources

The critical difference from generic AI chat: Claude has read every note in my vault. When I ask “what have I written about X?”, it searches 4,000+ markdown files and returns actual content, not hallucinations.

## Where the System Shows Constraints

**Learning Curve** – Setting up Cursor with git integration and custom rules requires technical comfort. The first week felt slower than Notion. The payoff comes at scale.

**Search Precision** – Markdown files don’t have database-style metadata. Tag discipline matters. Inconsistent tagging degrades search quality.

**Sync Complexity** – Running this across multiple devices requires git discipline. Merge conflicts happen when editing the same file on laptop and phone. I’ve solved this by treating mobile as read-only (Obsidian) and editing only on desktop (Cursor).

**Privacy Trade-offs** – AI vault analysis means sending note content to Claude’s API. Sensitive material goes in `.gitignore`d folders that Claude never sees. This works but requires constant vigilance.

**No Real-time Collaboration** – Unlike Notion, multiple people can’t edit simultaneously. Git merge workflows help, but this system optimises for individual deep work, not team real-time collaboration.

## The Questions This Opens

If treating knowledge like code works at individual scale, what breaks at team scale?

Could a team vault with branch-per-person and merge-on-review work for shared knowledge bases?

What if AI didn’t just search existing notes, but synthesised new insights overnight—running reasoning chains while you sleep, proposing connections you hadn’t considered?

If plain markdown plus AI can match proprietary tools today, what happens when the AI gets better and the file format stays stable?

## Building Your Own Implementation

If you want to try this approach:

1. **Foundation setup** (Week 1)Install Cursor (free tier works)Install Obsidian (also free)Create folder structure (start with /Daily Notes/ and /Areas/)Initialise git repository at root
 - Install Cursor (free tier works)
 - Install Obsidian (also free)
 - Create folder structure (start with /Daily Notes/ and /Areas/)
 - Initialise git repository at root

2. **Configure AI context** (Week 2)Add Claude to Cursor (requires API key)Create `.cursorrules` file with basic automationDefine operating modes for your needsTest vault-wide search
 - Add Claude to Cursor (requires API key)
 - Create `.cursorrules` file with basic automation
 - Define operating modes for your needs
 - Test vault-wide search

3. **Connect input sources** (Week 3)Set up Readwise for reading highlights (optional)Create daily note templateBuild meeting note workflowEstablish capture habits
 - Set up Readwise for reading highlights (optional)
 - Create daily note template
 - Build meeting note workflow
 - Establish capture habits

4. **Build your workflows** (Ongoing)Start with daily notes onlyAdd one workflow per weekLet the system grow organicallyWatch for patterns that want automation
 - Start with daily notes only
 - Add one workflow per week
 - Let the system grow organically
 - Watch for patterns that want automation

The key: start small. One folder. One template. One habit. The system’s value compounds with size and time.

## What This Makes Possible

After an initial effor to migrate and converge all apple and notion notes to .md files, I have 4,000+ notes. Every book highlight. Every meeting. Every article idea. Every personal reflection. All in plain text files I own completely.

When I write, Claude can surface insights from notes I wrote years ago. Connections I’d forgotten. Patterns across domains I didn’t consciously notice.

The system gets smarter as it grows. Unlike Notion or Evernote, which slow down with scale, this architecture thrives on volume. More notes mean more context. More context means better AI synthesis. Better synthesis means better thinking.

The tools are ready. Plain markdown has been stable for 30 years. Git has been production-grade for 15. AI assistants became capable in the last two. The pieces exist. The question is whether the approach fits your knowledge work style.

For me, escaping the app prison meant adopting developer infrastructure for non-developer work. Your path might differ. But if you’ve felt the friction of fragmented tools and lost context, the architecture is worth considering.

---

*This article lives in my vault at*`/Areas/Writing/4-Drafts/`*and was produced entirely using the system it describes. The git log shows 47 commits over eight days of development.*
