import { forwardRef } from 'react'

const Textarea = forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors ${
          error
            ? 'border-red-500 focus:border-red-600 focus:ring-red-500'
            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500'
        } focus:outline-none focus:ring-1 resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
