//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Microsoft.Teams.Apps.QBot.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Question
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public Nullable<System.Guid> TenantId { get; set; }
        public Nullable<System.Guid> GroupId { get; set; }
        public string TeamId { get; set; }
        public string TeamName { get; set; }
        public string ConversationId { get; set; }
        public string MessageId { get; set; }
        public string Topic { get; set; }
        public string Status { get; set; }
        public string QuestionText { get; set; }
        public int OriginalPosterId { get; set; }
        public System.DateTime DateSubmitted { get; set; }
        public string Link { get; set; }
        public string AnswerText { get; set; }
        public string AnswerMessageId { get; set; }
        public Nullable<int> AnswerPosterId { get; set; }
        public Nullable<System.DateTime> DateAnswered { get; set; }
        public string AnswerCardActivityId { get; set; }
    
        public virtual Course Course { get; set; }
        public virtual User AnswerUser { get; set; }
        public virtual User QuestionUser { get; set; }
    }
}
