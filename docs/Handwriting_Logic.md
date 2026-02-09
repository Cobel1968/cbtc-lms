# Feature 4: Analog-to-Digital Pedagogical Bridge
## Technical Workflow

1. **Ingestion**: Physical vocational assessments are scanned (OCR Pre-processing).
2. **Contextual Extraction**: The engine searches for technical terms defined in `public.vocational_lexicon`.
3. **Bilingual Validation**:
    - If "Housekeeping" (EN) or "Service détage" (FR) is identified.
    - The `difficulty_weight` is retrieved.
4. **Adaptive HTML Injection**: 
    - The student profile is updated via `Invoke-CobelOptimization.ps1`.
    - The front-end JSON (`soro_profile.json`) is refreshed to show the new ETA.

## Data Integrity Note
All bilingual terms containing accents (e.g., é, à, â) must be stored using **UTF-8 Hex-Injection** to prevent "Bilingual Friction" during OCR matching.
