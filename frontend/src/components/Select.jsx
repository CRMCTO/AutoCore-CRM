const Select = ({ label, options, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
          error
            ? 'border-red-500 focus:border-red-600 focus:ring-red-500'
            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500'
        } focus:outline-none focus:ring-1 transition-colors ${className}`}
        {...props}
      >
        <option value="">Выберите...</option>
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export default Select
