import React from 'react';

export default function LanguageSelect({ value, onChange, languages }) {
  const updatedLanguages = [
    { code: "nl", name: "Nederlands" },
    { code: "en", name: "Engels" },
    { code: "fr", name: "Frans" },
    { code: "de", name: "Duits" },
    ...languages.filter((lang) => !["nl", "en", "fr", "de"].includes(lang.code)),
  ];

  return (
    <select value={value} onChange={onChange} className="w-40">
      <option value="" disabled>Select a language</option>
      {updatedLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}