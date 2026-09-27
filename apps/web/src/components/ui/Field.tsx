import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

/*
 * Form controls. Server-component friendly (no hooks): the control id defaults
 * to `name`, and hint/error ids are derived from it for aria-describedby.
 * Works as uncontrolled inputs, with React Hook Form's `register()`, or controlled.
 */

type FieldMeta = {
  label: ReactNode;
  hint?: ReactNode;
  /** Validation message; sets aria-invalid and replaces the hint visually. */
  error?: ReactNode;
  className?: string;
};

function describe(id: string, hint?: ReactNode, error?: ReactNode) {
  const ids = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ");
  return ids || undefined;
}

function Messages({ id, hint, error }: { id: string; hint?: ReactNode; error?: ReactNode }) {
  return (
    <>
      {hint && !error && (
        <span id={`${id}-hint`} className="field__hint">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
    </>
  );
}

function FieldShell({ id, label, hint, error, required, className, children }: FieldMeta & { id: string; required?: boolean; children: ReactNode }) {
  return (
    <div className={["field", className].filter(Boolean).join(" ")}>
      <label htmlFor={id} className="field__label">
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      <Messages id={id} hint={hint} error={error} />
    </div>
  );
}

function fieldId(id?: string, name?: string) {
  const resolved = id ?? name;
  if (!resolved) throw new Error("Form controls need an `id` or `name`.");
  return resolved;
}

export type InputProps = FieldMeta & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function Input({ label, hint, error, className, id, name, required, ...rest }: InputProps) {
  const controlId = fieldId(id, name);
  return (
    <FieldShell id={controlId} label={label} hint={hint} error={error} required={required} className={className}>
      <input
        id={controlId}
        name={name}
        required={required}
        className="field__control"
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(controlId, !error && hint, error)}
        {...rest}
      />
    </FieldShell>
  );
}

export type TextareaProps = FieldMeta & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export function Textarea({ label, hint, error, className, id, name, required, ...rest }: TextareaProps) {
  const controlId = fieldId(id, name);
  return (
    <FieldShell id={controlId} label={label} hint={hint} error={error} required={required} className={className}>
      <textarea
        id={controlId}
        name={name}
        required={required}
        className="field__control"
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(controlId, !error && hint, error)}
        {...rest}
      />
    </FieldShell>
  );
}

export type SelectProps = FieldMeta &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> & {
    options: { value: string; label: string }[];
    placeholder?: string;
  };

export function Select({ label, hint, error, className, id, name, required, options, placeholder, ...rest }: SelectProps) {
  const controlId = fieldId(id, name);
  return (
    <FieldShell id={controlId} label={label} hint={hint} error={error} required={required} className={className}>
      <select
        id={controlId}
        name={name}
        required={required}
        className="field__control"
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(controlId, !error && hint, error)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export type CheckboxProps = FieldMeta & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">;

/** Label sits beside the box; suited to consent and opt-in checkboxes. */
export function Checkbox({ label, hint, error, className, id, name, ...rest }: CheckboxProps) {
  const controlId = fieldId(id, name);
  return (
    <label htmlFor={controlId} className={["checkbox", className].filter(Boolean).join(" ")}>
      <input
        id={controlId}
        name={name}
        type="checkbox"
        className="checkbox__input"
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(controlId, !error && hint, error)}
        {...rest}
      />
      <span>{label}</span>
      <Messages id={controlId} hint={hint} error={error} />
    </label>
  );
}
