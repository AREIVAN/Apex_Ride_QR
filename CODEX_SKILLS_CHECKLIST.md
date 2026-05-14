# Codex Skills Checklist

Fecha de revisión: 2026-05-13  
Repo: `/Users/areivan/PROJECTS/Apex_Ride_QR`

## Resumen

- En este repo NO hay `.opencode/`, `AGENTS.md`, comandos personalizados ni skills locales.
- OpenCode sí tiene configuración global en `/Users/areivan/.config/opencode/` y una skill extra en `/Users/areivan/.opencode/skills/ui-ux-pro-max/SKILL.md`.
- Codex sí tiene instrucciones globales en `/Users/areivan/.codex/AGENTS.md`.
- La mayoría de reglas importantes ya están en Codex, pero faltan equivalentes explícitos para algunos comandos/agentes de OpenCode y para `hyperframes-generator`.

## Comparación OpenCode → Codex

| Skill o regla encontrada en OpenCode | Equivalente recomendado en Codex | Estado | Archivo donde debería vivir | Cómo verificar que se está usando |
| --- | --- | --- | --- | --- |
| Persona/reglas base: commits convencionales, sin AI attribution, no build, verificar claims, idioma/tone | Reglas globales en Codex | Existe | `/Users/areivan/.codex/AGENTS.md` | Pedir una respuesta en español/inglés o una propuesta de commit; debe respetar tono, idioma y no agregar coautoría. |
| Auto-load: `go-testing` para Go tests/Bubbletea | Skill Codex `go-testing` | Existe | `/Users/areivan/.codex/skills/go-testing/SKILL.md` | Pedir escribir tests Go; Codex debe anunciar/cargar `go-testing` antes de tocar código. |
| Auto-load: `skill-creator` para crear skills | Skill Codex `skill-creator` | Existe | `/Users/areivan/.codex/skills/skill-creator/SKILL.md` y skill system `/Users/areivan/.codex/skills/.system/skill-creator/SKILL.md` | Pedir crear una skill; Codex debe usar la skill antes de escribir archivos. |
| `ui-ux-pro-max` global de OpenCode | Skill Codex `ui-ux-pro-max` | Existe | `/Users/areivan/.codex/skills/ui-ux-pro-max/SKILL.md` | Pedir auditoría/diseño UI avanzado; Codex debe usar `ui-ux-pro-max` o una skill UI equivalente. |
| `branch-pr` | Skill Codex `branch-pr` / GitHub plugin PR workflow | Existe | `/Users/areivan/.codex/skills/branch-pr/SKILL.md` | Pedir crear PR; Codex debe seguir flujo issue-first/PR y usar GitHub si aplica. |
| `issue-creation` | Skill Codex `issue-creation` | Existe | `/Users/areivan/.codex/skills/issue-creation/SKILL.md` | Pedir crear issue; Codex debe usar workflow de issue. |
| `judgment-day` | Skill Codex `judgment-day` | Existe | `/Users/areivan/.codex/skills/judgment-day/SKILL.md` | Decir “judgment day”; Codex debe lanzar revisión adversarial dual. |
| Skills SDD: `sdd-init`, `sdd-explore`, `sdd-propose`, `sdd-spec`, `sdd-design`, `sdd-tasks`, `sdd-apply`, `sdd-verify`, `sdd-archive`, `sdd-onboard` | Skills Codex SDD equivalentes | Existe | `/Users/areivan/.codex/skills/sdd-*/SKILL.md` | Invocar `/sdd-*`; Codex debe comprobar `sdd-init`, resolver artifact store y delegar fases. |
| Comandos OpenCode `/sdd-new`, `/sdd-continue`, `/sdd-ff` | Meta-comandos en `AGENTS.md` de Codex | Existe | `/Users/areivan/.codex/AGENTS.md` | Invocar `/sdd-new`, `/sdd-continue` o `/sdd-ff`; Codex debe manejarlos como orquestador, no como skill directa. |
| Comandos OpenCode `/sdd-init`, `/sdd-explore`, `/sdd-apply`, `/sdd-verify`, `/sdd-archive`, `/sdd-onboard` | Skills Codex con triggers slash | Existe | `/Users/areivan/.codex/skills/sdd-*/SKILL.md` + `/Users/areivan/.codex/AGENTS.md` | Invocar comando; Codex debe usar la skill correspondiente. |
| Agentes OpenCode `sdd-*` definidos en `opencode.json` | Codex sub-agents vía `spawn_agent` + skills SDD | Parcial | `/Users/areivan/.codex/AGENTS.md` | En tareas SDD, Codex debe delegar a sub-agentes con reglas compactas; no hay definición persistente 1:1 por agente como OpenCode. |
| Plugin OpenCode `engram.ts` | Herramientas Codex `mcp__engram__.*` + protocolo Engram | Existe | `/Users/areivan/.codex/AGENTS.md` | Tras decisiones/descubrimientos, Codex debe llamar `mem_save`; antes de cerrar, `mem_session_summary`. |
| Plugin OpenCode `background-agents.ts` | Codex `spawn_agent`/`wait_agent` | Parcial | Instrucciones de herramientas Codex + `/Users/areivan/.codex/AGENTS.md` | Pedir delegación explícita o SDD; Codex debe usar sub-agents cuando corresponda. |
| `skill-registry` | Skill Codex `skill-registry` | Existe | `/Users/areivan/.codex/skills/skill-registry/SKILL.md` | Pedir “update skills/skill registry”; debe generar/actualizar `.atl/skill-registry.md` y guardar en Engram. |
| Shared SDD docs `_shared/*` | Shared Codex `_shared` | Existe | `/Users/areivan/.codex/skills/_shared/` | En SDD debe usar convenciones Engram/OpenSpec/persistence. |
| `hyperframes-generator` | Skills Codex `hyperframes`, `hyperframes-cli`, `website-to-hyperframes`, `gsap` | Parcial | `/Users/areivan/.agents/skills/hyperframes*` y plugin HyperFrames | Pedir generar video HyperFrames; Codex debe usar skills HyperFrames, pero el nombre exacto `hyperframes-generator` no existe. |

## Archivos revisados

### OpenCode

- `/Users/areivan/.config/opencode/AGENTS.md`
- `/Users/areivan/.config/opencode/opencode.json`
- `/Users/areivan/.config/opencode/commands/*.md`
- `/Users/areivan/.config/opencode/skills/*/SKILL.md`
- `/Users/areivan/.opencode/skills/ui-ux-pro-max/SKILL.md`

### Codex

- `/Users/areivan/.codex/AGENTS.md`
- Skills disponibles en Codex: `/Users/areivan/.codex/skills/**/SKILL.md`, `/Users/areivan/.agents/skills/**/SKILL.md`, y plugins habilitados.

## Reglas importantes que faltan o conviene reforzar

No encontré un `AGENTS.md` local en este repo. Para que el proyecto sea portable y no dependa sólo de tu configuración global, conviene crear `/Users/areivan/PROJECTS/Apex_Ride_QR/AGENTS.md` con este contenido mínimo:

```markdown
# AGENTS.md — Apex Ride QR

## Project Rules

- Do not modify application code unless explicitly requested.
- Never run build commands after changes unless the user explicitly asks.
- Never add `Co-Authored-By` or AI attribution to commits. Use conventional commits only.
- Match the user's current language.
- Verify technical claims against code/docs before stating them.

## Skills

When the task matches a context, load the matching Codex skill BEFORE writing code:

| Context | Skill |
| --- | --- |
| Go tests or Bubbletea TUI tests | `go-testing` |
| Creating or updating AI skills | `skill-creator` |
| UI/UX design, audit, polish, interaction review | `ui-ux-pro-max` or `ui-audit` / `ui-design` as appropriate |
| HyperFrames video/composition work | `hyperframes`, `hyperframes-cli`, `website-to-hyperframes`, or `gsap` as appropriate |
| SDD workflow commands | `sdd-*` skills and the SDD orchestrator rules |

## SDD

For `/sdd-new`, `/sdd-ff`, `/sdd-continue`, `/sdd-apply`, `/sdd-verify`, or `/sdd-archive`:

- Check whether `sdd-init/{project}` exists in Engram first.
- If missing, run `sdd-init` before continuing.
- Prefer Engram as artifact store unless the user asks for OpenSpec or hybrid.
- For apply/verify, forward strict TDD status from `sdd-init` when present.
```

## Nota técnica

Codex no replica exactamente el modelo de OpenCode `opencode.json` con agentes persistentes por nombre. En Codex, el equivalente real es: skills + instrucciones en `AGENTS.md` + sub-agents (`spawn_agent`) cuando el flujo lo requiere. Es el mismo objetivo arquitectónico, no el mismo mecanismo.
